import * as React from 'react';
import NumberField from '../../../../core/NumberField';

interface NumberInputProps {
  label: string;
  value: number;
  defaultValue: number;
  constraints: {
    min?: number;
    max?: number;
  };
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: number) => any;
}

const isValid = (value: any) =>
  value !== undefined && value !== null && value !== '' && !isNaN(value);

const NumberInput: React.SFC<NumberInputProps> = ({
  label,
  value,
  defaultValue,
  constraints,
  helperText,
  error,
  disabled,
  onChange,
}) => (
  <NumberField
    label={label}
    value={value}
    onChange={onChange}
    helperText={helperText}
    error={error}
    disabled={disabled}
    min={constraints.min}
    max={constraints.max}
    onBlur={() => {
      if (isValid(defaultValue) && !isValid(value)) {
        onChange(defaultValue);
      } else if (
        isValid(constraints.min) &&
        (!isValid(value) || value < constraints.min)
      ) {
        onChange(constraints.min);
      } else if (isValid(constraints.max) && value > constraints.max) {
        onChange(constraints.max);
      }
    }}
  />
);

export default NumberInput;
