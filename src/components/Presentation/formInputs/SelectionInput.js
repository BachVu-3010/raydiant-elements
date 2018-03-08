import React from 'react';
import SelectField from '../../SelectField';
import { propTypes, defaultProps } from './propTypes';

const SelectionInput = ({
  label,
  value,
  helperText,
  autoFocus,
  options,
  strings,
  hasError,
  onChange,
  onBlur,
}) => (
  <SelectField
    label={label}
    value={value}
    helperText={helperText}
    error={hasError}
    autoFocus={autoFocus}
    onChange={evt => onChange(evt.target.value)}
    onBlur={onBlur}
  >
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {strings[opt.name] || opt.name}
      </option>
    ))}
  </SelectField>
);

SelectionInput.propTypes = propTypes;
SelectionInput.defaultProps = defaultProps;

export default SelectionInput;
