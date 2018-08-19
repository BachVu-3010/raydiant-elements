import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import FormHelperText from '../../internal/FormHelperText';
import Input from '../../internal/Input';
import InputBackground from '../../internal/InputBackground';
import InputLabel from '../../internal/InputLabel';

interface TextFieldProps {
  /** The label of the field */
  label: string;
  /** The value of the field */
  value?: string;
  /** The type of input */
  type?: 'text' | 'email' | 'password' | 'tel' | 'search' | 'url';
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Set to true to display as a textarea */
  multiline?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Optional icon to display */
  icon?: React.ReactNode;
  /** Called when the value changes */
  onChange?: (value: string) => any;
}

const TextField: React.SFC<TextFieldProps> = ({
  label,
  value = '',
  type = 'text',
  error = false,
  disabled = false,
  multiline = false,
  helperText = '',
  icon = null,
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
        value={value}
        type={type}
        disabled={disabled}
        multiline={multiline}
        icon={icon}
        onChange={e => onChange(e.target.value)}
      />
    </InputBackground>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default TextField;
