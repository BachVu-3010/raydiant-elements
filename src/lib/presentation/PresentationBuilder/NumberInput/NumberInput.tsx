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
    helperText={helperText}
    error={error}
    min={constraints.min}
    max={constraints.max}
    onBlur={() => {
      if (constraints.min && (!value || value < constraints.min)) {
        onChange(constraints.min);
      } else if (constraints.max && value > constraints.max) {
        onChange(constraints.max);
      }

      if (onBlur) onBlur();
    }}
  />
);

export default NumberInput;
