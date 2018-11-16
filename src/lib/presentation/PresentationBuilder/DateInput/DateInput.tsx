import * as React from 'react';
import DateField from '../../../core/DateField';

interface DateInputProps {
  label: string;
  value: string;
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

const DateInput: React.SFC<DateInputProps> = ({
  label,
  value,
  helperText,
  error,
  onChange,
  onBlur,
}) => (
  <DateField
    label={label}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    helperText={helperText}
    error={error}
  />
);

export default DateInput;
