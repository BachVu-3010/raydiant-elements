import MUIFormHelperText from '@material-ui/core/FormHelperText';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './FormHelperText.styles';

interface FormHelperTextProps extends WithStyles<typeof styles> {
  error?: boolean;
  disabled?: boolean;
}

const FormHelperText: React.SFC<FormHelperTextProps> = ({
  error,
  disabled,
  children,
  classes,
}) => (
  <MUIFormHelperText
    className={classes.root}
    classes={{ error: classes.error }}
    error={error}
    disabled={disabled}
  >
    {children}
  </MUIFormHelperText>
);

export default withStyles(styles)(FormHelperText);
