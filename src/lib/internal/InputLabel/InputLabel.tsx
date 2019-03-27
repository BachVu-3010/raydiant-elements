import MUIInputLabel from '@material-ui/core/InputLabel';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './InputLabel.styles';

interface InputLabelProps extends WithStyles<typeof styles> {
  disabled?: boolean;
  error?: boolean;
  shrink?: boolean;
}

const InputLabel: React.SFC<InputLabelProps> = ({
  disabled = false,
  error = false,
  children,
  classes,
  shrink,
}) => (
  <MUIInputLabel
    disabled={disabled}
    error={error}
    classes={{
      root: classes.root,
      shrink: classes.shrink,
    }}
    FormLabelClasses={{
      focused: classes.focused,
      error: classes.error,
      disabled: classes.disabled,
    }}
    shrink={shrink}
  >
    {children}
  </MUIInputLabel>
);

export default withStyles(styles)(InputLabel);
