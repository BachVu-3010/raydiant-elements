import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { testAttr } from '../../../helpers';
import FormHelperText from '../../internal/FormHelperText';
import Input from '../../internal/Input';
import InputBackground from '../../internal/InputBackground';
import InputLabel from '../../internal/InputLabel';
import Icon, { IconOptions } from '../Icon';

interface TextFieldProps {
  /** The label of the field */
  label: string;
  /** The value of the field */
  value?: string;
  /** The type of input */
  type?: 'text' | 'email' | 'password' | 'tel' | 'search' | 'url';
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable the input */
  disabled?: boolean;
  /** Set the max width */
  maxWidth?: number;
  /** Set to true to display as a textarea */
  multiline?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Optional icon to display */
  icon?: React.ReactNode | IconOptions;
  /** Optional text mask, only works with type='text' and non-multiline */
  mask?: Array<string | RegExp> | ((value: string) => Array<string | RegExp>);
  /** Set to false to disable the mask guide while typing */
  maskGuide?: boolean;
  /** The mask's placeholder character (defaults to '_') */
  maskPlaceholderChar?: string;
  /** Preserves the text positions when deleting characters in a masked input */
  keepCharPositions?: boolean;
  /** A function to modify the value of a masked input */
  pipe?: (
    conformedValue: string,
    config: any,
  ) => false | string | { value: string; indexesOfPipedChars: number[] };
  /** Called when the value changes */
  onChange?: (value: string) => any;
  /** The test id of the input */
  testId?: string;
}

const TextField: React.SFC<TextFieldProps> = ({
  label,
  value = '',
  type = 'text',
  error = false,
  disabled = false,
  maxWidth,
  multiline = false,
  helperText = '',
  icon = null,
  mask,
  maskGuide = false,
  maskPlaceholderChar = '_',
  keepCharPositions = false,
  pipe,
  onChange = () => {
    return;
  },
  testId,
}) => {
  const commonProps = {
    type: mask ? 'text' : type,
    multiline: mask ? false : multiline,
    fullWidth: true,
    disabled,
    value,
    icon: typeof icon === 'string' ? <Icon icon={icon as IconOptions} /> : icon,
  };
  return (
    <FormControl fullWidth error={error} style={{ maxWidth }}>
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
            keepCharPositions={keepCharPositions}
            onChange={e => onChange(e.target.value)}
            render={(ref, inputProps) => (
              <Input
                {...commonProps}
                inputRef={ref as any}
                inputProps={{ ...inputProps, ...testAttr(testId) }}
              />
            )}
          />
        ) : (
          <Input
            {...commonProps}
            onChange={e => onChange(e.target.value)}
            inputProps={testAttr(testId)}
          />
        )}
      </InputBackground>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default TextField;
