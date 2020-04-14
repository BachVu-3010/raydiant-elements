import * as React from 'react';
import Switch from '../../../core/Switch';

interface BooleanInputProps {
  label: string;
  value: boolean;
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => any;
  onBlur: () => any;
}

const BooleanInput: React.SFC<BooleanInputProps> = ({
  label,
  value,
  disabled,
  helperText,
  onChange,
}) => (
  <Switch
    label={label}
    checked={value}
    disabled={disabled}
    onChange={onChange}
    helperText={helperText}
  />
);

export default BooleanInput;
