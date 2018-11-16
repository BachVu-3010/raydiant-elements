import * as React from 'react';
import NumberField from '../../../core/NumberField';

interface NumberInputProps {
  label: string;
  value: number;
  constraints: {
    min?: number;
    max?: number;
  };
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: number) => any;
  onBlur: () => any;
}

const NumberInput: React.SFC<NumberInputProps> = ({
  label,
  value,
  constraints,
  helperText,
  error,
  onChange,
  onBlur,
}) => (
  <NumberField
    label={label}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    helperText={helperText}
    error={error}
    min={constraints.min}
    max={constraints.max}
  />
);

export default NumberInput;
