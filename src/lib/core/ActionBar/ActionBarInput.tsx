import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ActionBarInput.styles';

export interface ActionBarInputProps extends WithStyles<typeof styles> {
  icon?: React.ReactNode;
  label?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  maxWidth?: string | number;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const ActionBarInput: React.SFC<ActionBarInputProps> = ({
  classes,
  icon,
  label,
  value,
  type,
  disabled,
  maxWidth,
  onClick,
  onChange,
  onBlur,
}) => {
  return (
    <Input
      fullWidth
      className={classes.root}
      classes={{
        input: classes.input,
        underline: classes.underline,
      }}
      placeholder={label}
      value={value}
      type={type}
      disabled={disabled}
      style={{ maxWidth }}
      onClick={onClick}
      onChange={event => {
        if (onChange) {
          onChange(event.target.value);
        }
      }}
      onBlur={onBlur}
      endAdornment={
        icon ? <InputAdornment position="end">{icon}</InputAdornment> : null
      }
    />
  );
};

export default withStyles(styles)(ActionBarInput);
