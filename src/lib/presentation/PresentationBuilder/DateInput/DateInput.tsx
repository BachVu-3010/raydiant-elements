import * as React from 'react';
import DateField from '../../../core/DateField';

interface DateInputProps {
  label: string;
  value: string;
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

const DateInput: React.SFC<DateInputProps> = ({
  label,
  value,
  helperText,
  error,
  disabled,
  onChange,
  onBlur,
}) => (
  <DateField
    label={label}
    helperText={helperText}
    error={error}
    disabled={disabled}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
);

export default DateInput;
