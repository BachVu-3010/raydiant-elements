import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from './FormControlLabel';
import RadioInput from './RadioInput';

const propTypes = {
  /** Child elements are used as the checkbox label. */
  children: PropTypes.node,
  /** Whether the radio button is checked or not. */
  checked: PropTypes.bool,
  /** Whether the radio button is disabled or not. */
  disabled: PropTypes.bool,
  /**
   * The ID of an element that labels this control.
   * Useful if this control is separated from its text.
  */
  labelledBy: PropTypes.string,
  /** The group the radio button belongs to */
  name: PropTypes.string,
  /** The value of the radio button */
  value: PropTypes.string,
  /** Called when the user clicks the control. */
  onChange: PropTypes.func,
};
const defaultProps = {
  children: null,
  checked: false,
  disabled: false,
  labelledBy: null,
  name: null,
  value: '',
  onChange: () => {},
};

/**
 * Use this to select a value from several valid options.
 * See also: <a href="#checkbox">checkbox</a>, <a href="#select">select</a>.
 */
const Radio = ({
  children,
  checked,
  disabled,
  labelledBy,
  name,
  onChange,
  value,
}) => (
  <FormControlLabel
    {...{ disabled }}
    control={
      <RadioInput
        {...{ checked, disabled, labelledBy, name, onChange, value }}
      />
    }
    label={children}
  />
);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
