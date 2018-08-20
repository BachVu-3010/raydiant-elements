import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import MaskedInput from 'react-text-mask';
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
  /** Optional text mask, only works with type='text' and non-multiline */
  mask?: Array<string | RegExp> | ((value: string) => Array<string | RegExp>);
  /** Set to false to disable the mask guide while typing */
  maskGuide?: boolean;
  /** The mask's placeholder character (defaults to '_') */
  maskPlaceholderChar?: string;
  /** A function to modify the value of a masked input */
  pipe?: (
    conformedValue: string,
    config: any,
  ) => false | string | { value: string; indexesOfPipedChars: number[] };
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
  mask,
  maskGuide = false,
  maskPlaceholderChar = '_',
  pipe,
  onChange = () => {
    return;
  },
}) => {
  const commonProps = {
    type: mask ? 'text' : type,
    multiline: mask ? false : multiline,
    fullWidth: true,
    disabled,
    value,
    icon,
  };
  return (
    <FormControl fullWidth error={error}>
      <InputBackground>
        <InputLabel error={error} disabled={disabled}>
          {label}
        </InputLabel>
        {mask ? (
          <MaskedInput
            placeholder=""
            mask={mask}
            guide={maskGuide}
            placeholderChar={maskPlaceholderChar}
            pipe={pipe}
            onChange={e => onChange(e.target.value)}
            render={(ref, inputProps) => (
              <Input
                {...commonProps}
                inputRef={ref as any}
                inputProps={inputProps}
              />
            )}
          />
        ) : (
          <Input {...commonProps} onChange={e => onChange(e.target.value)} />
        )}
      </InputBackground>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default TextField;
