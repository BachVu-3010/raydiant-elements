import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import FormHelperText from '../../internal/FormHelperText';
import Input from '../../internal/Input';
import InputBackground from '../../internal/InputBackground';
import InputLabel from '../../internal/InputLabel';

interface FocusableTextFieldProps {
  label: string;
  value?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
}

class FocusableTextField extends React.Component<FocusableTextFieldProps> {
  input: HTMLInputElement;

  focus = () => this.input.focus();

  render() {
    const {
      label,
      value,
      error,
      helperText,
      disabled,
      onChange,
      onKeyUp,
      onKeyDown,
      onBlur,
      onFocus,
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
            disabled={disabled}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            onFocus={onFocus}
            inputRef={input => {
              this.input = input;
            }}
          />
        </InputBackground>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default FocusableTextField;
