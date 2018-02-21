import React from 'react';
import TextField from '../../TextField';
import { propTypes, defaultProps } from './propTypes';

const TextInput = ({
  label,
  value,
  helperText,
  constraints,
  hasError,
  onChange,
  onBlur,
}) => (
  <TextField
    multiline
    label={label}
    value={value || ''}
    maxLength={constraints.maxlength}
    helperText={helperText}
    error={hasError}
    onChange={evt => onChange(evt.target.value)}
    onBlur={onBlur}
  />
);

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
