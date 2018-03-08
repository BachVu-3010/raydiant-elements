import React from 'react';
import DatePicker from '../../DatePicker';
import { propTypes, defaultProps } from './propTypes';

const DateInput = ({
  label,
  value,
  helperText,
  hasError,
  autoFocus,
  onChange,
  onBlur,
}) => (
  <DatePicker
    label={label}
    value={value}
    helperText={helperText}
    error={hasError}
    autoFocus={autoFocus}
    onDateChange={onChange}
    onBlur={onBlur}
  />
);

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
