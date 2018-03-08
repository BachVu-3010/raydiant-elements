import React from 'react';
import TextField from '../../TextField';
import { propTypes, defaultProps } from './propTypes';

const StringInput = ({
  label,
  value,
  autoFocus,
  helperText,
  constraints,
  hasError,
  onChange,
  onBlur,
}) => (
  <TextField
    label={label}
    value={value}
    maxLength={constraints.maxlength}
    helperText={helperText}
    error={hasError}
    autoFocus={autoFocus}
    onChange={evt => onChange(evt.target.value)}
    onBlur={onBlur}
  />
);

StringInput.propTypes = propTypes;
StringInput.defaultProps = defaultProps;

export default StringInput;
