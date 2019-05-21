import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import NavContext from '../../util/context/NavContext';
import { useScrollDirection } from '../../util/hooks';
import { nav, open, divider, link, linkDisabled } from './switcher.module.scss';

const Switcher = ({ children }) => {
  const { switcherIsOpen, toggleNavState } = useContext(NavContext);
  const direction = useScrollDirection();

  if (direction === 'down' && switcherIsOpen) {
    toggleNavState('switcherIsOpen', 'close');
  }

  return (
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label="website switcher"
    >
      <ul>{children}</ul>
    </nav>
  );
};

export const SwitcherDivider = props => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const SwitcherLink = ({ disabled, children, ...rest }) => (
  <li>
    {disabled ? (
      <span className={linkDisabled}>{children}</span>
    ) : (
      <a className={link} {...rest}>
        {children}
      </a>
    )}
  </li>
);

Switcher.defaultProps = {
  children: [
    <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>,
    <SwitcherLink href="https://ibm.com/design/language">
      IBM Design Language
    </SwitcherLink>,
    <SwitcherLink disabled>IBM Brand Center</SwitcherLink>,
    <SwitcherDivider>Design disciplines</SwitcherDivider>,
    <SwitcherLink href="https://www.carbondesignsystem.com/">
      Product
    </SwitcherLink>,
    <SwitcherLink href="https://www.ibm.com/standards/web/">
      Digital
    </SwitcherLink>,
    <SwitcherLink disabled>Events</SwitcherLink>,
    <SwitcherDivider>Design practices</SwitcherDivider>,
    <SwitcherLink href="https://www.ibm.com/design/thinking/">
      IBM Enterprise Design Thinking
    </SwitcherLink>,
    <SwitcherLink href="https://www.ibm.com/design/language/disciplines/digital/">
      IBM Design Research
    </SwitcherLink>,
    <SwitcherLink href="https://www.ibm.com/services/ibmix/">
      IBM iX
    </SwitcherLink>,
    <SwitcherLink disabled>IBM AI</SwitcherLink>,
  ],
};

export default Switcher;
