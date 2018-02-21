import React from 'react';
import DatePicker from '../../DatePicker';
import { propTypes, defaultProps } from './propTypes';

const DateInput = ({
  label,
  value,
  helperText,
  hasError,
  onChange,
  onBlur,
}) => (
  <DatePicker
    label={label}
    value={value}
    helperText={helperText}
    error={hasError}
    onDateChange={onChange}
    onBlur={onBlur}
  />
);

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
