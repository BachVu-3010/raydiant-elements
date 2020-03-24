import MUISelect from '@material-ui/core/Select';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { testAttr } from '../../helpers';
import Input from '../Input';
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
  testId?: string;
  native: boolean;
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
  testId,
  native,
}) => (
  <MUISelect
    native={native}
    value={value}
    disabled={disabled}
    fullWidth={fullWidth}
    input={<Input />}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    classes={{ select: classes.select }}
    inputProps={{ ...testAttr(testId) }}
  >
    {children}
  </MUISelect>
);

export default withStyles(styles)(Select);
