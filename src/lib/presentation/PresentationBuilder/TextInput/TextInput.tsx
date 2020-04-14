import * as React from 'react';
import TextField from '../../../core/TextField';

interface TextInputProps {
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

const TextInput: React.SFC<TextInputProps> = ({
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
    multiline
    label={label}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    helperText={helperText}
    error={error}
    disabled={disabled}
    maxLength={constraints.maxlength}
  />
);

export default TextInput;
