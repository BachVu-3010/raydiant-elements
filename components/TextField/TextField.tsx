import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import FormHelperText from '../FormHelperText';
import Input from '../Input';
import InputBackground from '../InputBackground';
import InputLabel from '../InputLabel';

interface TextFieldProps {
  /** The label of the text field */
  label: string;
  /** The label of the text field */
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

class TextField extends React.Component<TextFieldProps, {}> {
  static defaultProps = {
    value: '',
    type: 'text',
    error: false,
    disabled: false,
    multiline: false,
    helperText: '',
    onChange: () => {
      return;
    },
  };

  render() {
    const {
      label,
      value,
      type,
      icon,
      error,
      disabled,
      multiline,
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
  }
}

export default TextField;
