import MUIInput from '@material-ui/core/Input';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';
import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Input.styles';

interface InputProps extends WithStyles<typeof styles> {
  value?: string;
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'search'
    | 'url'
    | 'number'
    | 'time';
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  multilineHeight?: string | number;
  icon?: React.ReactNode;
  inputProps?: { [key: string]: any };
  inputRef?: React.Ref<HTMLInputElement>;
  // inputComponent is required for the Select component.
  inputComponent?: React.ReactType<InputBaseComponentProps>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
}

const Input: React.SFC<InputProps> = ({
  value = '',
  type = 'text',
  placeholder = '',
  fullWidth = false,
  disabled = false,
  multiline = false,
  multilineHeight,
  icon,
  inputProps,
  inputComponent,
  onChange,
  onKeyUp,
  onKeyDown,
  onBlur,
  onFocus,
  classes,
  inputRef,
}) => {
  let multilineOpts = {};
  let multilineInputOpts = {};
  if (multiline) {
    multilineOpts = {
      rows: 4,
      rowsMax: 4,
      multiline: true,
    };
    multilineInputOpts = { style: { height: multilineHeight } };
  }

  const inputElement = (
    <MUIInput
      inputRef={inputRef}
      value={value}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      disabled={disabled}
      inputComponent={inputComponent}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      classes={{
        root: classes.root,
        multiline: classes.multiline,
        underline: classes.underline,
        disabled: classes.disabled,
        input: cn(
          classes.input,
          icon && classes.inputWithIcon,
          multiline && classes.inputWithMultiline,
        ),
      }}
      inputProps={{ ...inputProps, ...multilineInputOpts }}
      {...multilineOpts}
    />
  );

  if (icon) {
    return (
      <div className={classes.iconContainer}>
        {inputElement}
        <div className={classes.icon}>{icon}</div>
      </div>
    );
  }

  return inputElement;
};

export default withStyles(styles)(Input);
