import * as React from 'react';
import Switch from '../../../core/Switch';

interface BooleanInputProps {
  label: string;
  value: boolean;
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: boolean) => any;
  onBlur: () => any;
}

const BooleanInput: React.SFC<BooleanInputProps> = ({
  label,
  value,
  helperText,
  onChange,
}) => (
  <Switch
    label={label}
    checked={value}
    onChange={onChange}
    helperText={helperText}
  />
);

export default BooleanInput;
