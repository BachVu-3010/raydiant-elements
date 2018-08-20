import MUIInput, { InputComponentProps } from '@material-ui/core/Input';
import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Input.styles';

interface InputProps extends WithStyles<typeof styles> {
  value?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'search' | 'url' | 'number';
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  icon?: React.ReactNode;
  inputProps?: { [key: string]: string };
  inputRef?: React.RefObject<any>;
  // inputComponent is required for the Select component.
  inputComponent?: React.ReactType<InputComponentProps>;
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
  if (multiline) {
    multilineOpts = { rows: 4, rowsMax: 4, multiline: true };
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
        input: cn(classes.input, icon && classes.inputWithIcon),
        underline: classes.underline,
        disabled: classes.disabled,
      }}
      inputProps={inputProps}
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

  return (
    <MUIInput
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
        input: classes.input,
        underline: classes.underline,
        disabled: classes.disabled,
      }}
      inputProps={inputProps}
      {...multilineOpts}
    />
  );
};

export default withStyles(styles)(Input);
