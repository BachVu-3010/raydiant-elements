import React from 'react';
import PropTypes from 'prop-types';

/** hey */

const propTypes = {
  /** Child elements are used as the checkbox label. */
  children: PropTypes.node,
  /** Whether the checkbox is checked or not. */
  checked: PropTypes.bool,
  /** Whether the checkbox is disabled or not. */
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
 * Use for independent `true` or `false` values.
 */
const Checkbox = ({ children, checked, disabled, onChange }) =>
  <label>
    <input
      type="checkbox"
      {...{ checked, disabled, onChange }}
    />
    <span>{children}</span>
  </label>;

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
