import * as React from 'react';
import TextField from '../../../core/TextField';

interface StringInputProps {
  label: string;
  value: string;
  constraints: {
    maxlength?: number;
  };
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

const StringInput: React.SFC<StringInputProps> = ({
  label,
  value,
  constraints,
  helperText,
  error,
  disabled,
  onChange,
  onBlur,
}) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    helperText={helperText}
    error={error}
    maxLength={constraints.maxlength}
    disabled={disabled}
  />
);

export default StringInput;
