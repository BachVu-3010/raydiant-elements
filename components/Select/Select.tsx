import MUISelect from '@material-ui/core/Select';
import * as React from 'react';
import Input from '../Input';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Select.styles';

interface SelectProps extends WithStyles<typeof styles> {
  value?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  /** The <option>s of the select */
  children: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>,
    child: React.ReactNode,
  ) => void;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
}

const Select: React.SFC<SelectProps> = ({
  value,
  disabled = false,
  fullWidth = false,
  children,
  onChange,
  onBlur,
  onFocus,
  classes,
}) => (
  <MUISelect
    native
    value={value}
    disabled={disabled}
    fullWidth={fullWidth}
    input={<Input />}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    classes={{ select: classes.select }}
  >
    {children}
  </MUISelect>
);

export default withStyles(styles)(Select);
