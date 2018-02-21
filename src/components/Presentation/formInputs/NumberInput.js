import React from 'react';
import NumberField from '../../NumberField';
import { propTypes, defaultProps } from './propTypes';

const NumberInput = ({
  label,
  value = 0,
  helperText,
  constraints,
  hasError,
  onChange,
  onBlur,
}) => (
  <NumberField
    label={label}
    value={value}
    min={constraints.min}
    max={constraints.max}
    helperText={helperText}
    error={hasError}
    onChange={evt => onChange(parseInt(evt.target.value, 10))}
    onBlur={onBlur}
  />
);

NumberInput.propTypes = propTypes;
NumberInput.defaultProps = defaultProps;

export default NumberInput;
