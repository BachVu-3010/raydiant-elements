import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import FormHelperText from '../FormHelperText';
import Input from '../Input';
import InputBackground from '../InputBackground';
import InputLabel from '../InputLabel';

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

class NumberField extends React.Component<NumberFieldProps, {}> {
  static defaultProps = {
    value: '',
    error: false,
    disabled: false,
    helperText: '',
    onChange: () => {
      return;
    },
  };

  render() {
    const {
      label,
      value,
      min,
      max,
      error,
      disabled,
      helperText,
      onChange,
    } = this.props;

    return (
      <FormControl fullWidth error={error}>
        <InputBackground>
          <InputLabel error={error} disabled={disabled}>
            {label}
          </InputLabel>
          <Input
            fullWidth
            value={String(value)}
            type="number"
            disabled={disabled}
            onChange={e => onChange(parseInt(e.target.value, 10))}
            inputProps={{ min: String(min), max: String(max) }}
          />
        </InputBackground>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default NumberField;
