import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from './FormControlLabel';
import CheckboxInput from './CheckboxInput';

const propTypes = {
  /** Child elements are used as the checkbox label. */
  children: PropTypes.node,
  /** Whether the checkbox is checked or not. */
  checked: PropTypes.bool,
  /** Whether the checkbox is disabled or not. */
  disabled: PropTypes.bool,
  name: PropTypes.string,
  /** Called when the user clicks the control. */
  onChange: PropTypes.func,
  value: PropTypes.string,
};
const defaultProps = {
  children: null,
  checked: false,
  disabled: false,
  name: '',
  onChange: () => {},
  value: '',
};

/**
 * Use for independent `true` or `false` values.
 * 
 * Checkboxes without labels will be rendered as round, and are intended for selecting items
 * in a grid.
 */
const Checkbox = ({ children, checked, disabled, name, onChange, value }) =>
  <FormControlLabel
    {...{ disabled }}
    control={<CheckboxInput {...{ checked, disabled, name, onChange, value }} variant={children ? null : 'round'} />}
    label={children}
  />;

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
