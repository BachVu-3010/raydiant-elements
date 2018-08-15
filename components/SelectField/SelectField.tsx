import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import FormHelperText from '../FormHelperText';
import InputBackground from '../InputBackground';
import InputLabel from '../InputLabel';
import Select from '../Select';

interface SelectFieldProps {
  /** The label of the text field */
  label: string;
  /** The label of the text field */
  value?: string;
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Called when the value changes */
  onChange?: (value: string) => any;
  /** The <option>s of the select */
  children: React.ReactNode;
}

class SelectField extends React.Component<SelectFieldProps, {}> {
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
      error,
      disabled,
      helperText,
      onChange,
      children,
    } = this.props;

    return (
      <FormControl fullWidth error={error}>
        <InputBackground>
          <InputLabel error={error} disabled={disabled}>
            {label}
          </InputLabel>
          <Select
            fullWidth
            value={value}
            disabled={disabled}
            onChange={e => onChange(e.target.value)}
          >
            {children}
          </Select>
        </InputBackground>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default SelectField;
