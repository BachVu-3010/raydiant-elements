import * as cn from 'classnames';
import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { testAttr } from '../../helpers';
import Icon, { IconOptions } from '../Icon';
import useStyles from './Input.styles';

export interface InputProps {
  /** The value of the field */
  value?: string;
  /** The type of input */
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'search'
    | 'url'
    | 'number'
    | 'time'
    | 'date';
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable the input */
  disabled?: boolean;
  /** Set the max width */
  maxWidth?: number;
  /** Set the max character length of the input */
  maxLength?: number;
  /** Set the max numner of the input when type is number */
  max?: number;
  /** Set the min numner of the input when type is number */
  min?: number;
  /** Set to true to display as a textarea */
  multiline?: boolean;
  /** The height of the textarea */
  multilineHeight?: number | string;
  /** Set to true to auto focus the input */
  autoFocus?: boolean;
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
  /** Called when the input loses focus */
  onBlur?: React.FocusEventHandler<any>;
  /** Called when the input becomes focused */
  onFocus?: React.FocusEventHandler<any>;
  /** Called when the input is clicked */
  onClick?: (event: React.MouseEvent<any>) => any;
  /** The test id of the input */
  testId?: string;
  inputProps?: any;
}

export const Input: React.FunctionComponent<InputProps> = ({
  value = '',
  type = 'text',
  error = false,
  disabled = false,
  maxLength,
  max,
  min,
  multiline = false,
  multilineHeight,
  autoFocus = false,
  icon = null,
  mask,
  maskGuide = false,
  maskPlaceholderChar = '_',
  keepCharPositions = false,
  pipe,
  onChange,
  onBlur,
  onFocus,
  onClick,
  testId,
}) => {
  const inputProps = {
    type: mask ? 'text' : type,
    disabled,
    value,
    maxLength,
    max,
    min,
    onBlur,
    onFocus,
    autoFocus,
    onClick,
    ...testAttr(testId),
  };

  const classes = useStyles();
  const inputClassName = cn(
    classes.input,
    icon && classes.inputWithIcon,
    error && classes.error,
    disabled && classes.disabled,
  );

  const renderInput = (ref?: any, maskedInputProps?: any) => {
    let inputEl: React.ReactElement<any> = null;

    if (multiline && !mask) {
      inputEl = (
        <textarea
          className={inputClassName}
          onChange={e => onChange(e.target.value)}
          style={{ height: multilineHeight }}
          {...inputProps}
        />
      );
    } else {
      inputEl = (
        <input
          className={inputClassName}
          ref={ref}
          {...inputProps}
          {...maskedInputProps}
        />
      );
    }

    const iconEl =
      typeof icon === 'string' ? <Icon icon={icon as IconOptions} /> : icon;

    return (
      <div className={cn(classes.root, multiline && classes.multiline)}>
        {inputEl}
        {iconEl && <div className={classes.icon}>{iconEl}</div>}
      </div>
    );
  };

  if (mask) {
    return (
      <MaskedInput
        placeholder=""
        mask={mask}
        guide={maskGuide}
        placeholderChar={maskPlaceholderChar}
        pipe={pipe}
        keepCharPositions={keepCharPositions}
        onChange={e => onChange(e.target.value)}
        render={renderInput}
      />
    );
  }

  return renderInput(undefined, {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value),
  });
};

export default Input;
