import MUIInput, { InputComponentProps } from '@material-ui/core/Input';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Input.styles';

interface InputProps extends WithStyles<typeof styles> {
  value?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'search' | 'url' | 'number';
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  inputProps?: { [key: string]: string };
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
  inputProps,
  inputComponent,
  onChange,
  onKeyUp,
  onKeyDown,
  onBlur,
  onFocus,
  classes,
}) => {
  let multilineOpts = {};
  if (multiline) {
    multilineOpts = { rows: 4, rowsMax: 4, multiline: true };
  }

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
