import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from './FormControlLabel';
import SwitchInput from './SwitchInput';

const propTypes = {
  /** Child elements are used as the switch label. */
  children: PropTypes.node,
  /** Whether the switch is on or off. */
  checked: PropTypes.bool,
  /** Whether the switch is disabled or not. */
  disabled: PropTypes.bool,
  /** Called when the user clicks the control. */
  onChange: PropTypes.func,
};
const defaultProps = {
  children: null,
  checked: false,
  disabled: false,
  onChange: () => {},
};

/**
 * Use for `true` or `false` settings.
 */
const Switch = ({ children, checked, disabled, onChange }) =>
  <FormControlLabel
    control={<SwitchInput {...{ checked, disabled, onChange }} />}
    disabled={disabled}
    label={children}
  />;

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
