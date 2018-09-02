import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import FormHelperText from '../../internal/FormHelperText';
import Input from '../../internal/Input';
import InputBackground from '../../internal/InputBackground';
import InputLabel from '../../internal/InputLabel';

interface NumberFieldProps {
  /** The label of the text field */
  label: string;
  /** The label of the text field */
  value?: number;
  /** The minimum value allowed */
  min?: number;
  /** The maximum value allowed */
  max?: number;
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Called when the value changes */
  onChange?: (value: number) => any;
}

const NumberField: React.SFC<NumberFieldProps> = ({
  label,
  value = null,
  min = null,
  max = null,
  error = false,
  disabled = false,
  helperText = '',
  onChange = () => {
    return;
  },
}) => (
  <FormControl fullWidth error={error}>
    <InputBackground>
      <InputLabel error={error} disabled={disabled}>
        {label}
      </InputLabel>
      <Input
        fullWidth
        value={value !== null ? String(value) : ''}
        type="number"
        disabled={disabled}
        onChange={e => onChange(parseInt(e.target.value, 10))}
        inputProps={{
          min: min !== null ? String(min) : '',
          max: max !== null ? String(max) : '',
        }}
      />
    </InputBackground>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default NumberField;
