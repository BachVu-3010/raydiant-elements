import MUIFormHelperText from '@material-ui/core/FormHelperText';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './FormHelperText.styles';

interface FormHelperTextProps extends WithStyles<typeof styles> {
  error?: boolean;
}

const FormHelperText: React.SFC<FormHelperTextProps> = ({
  error,
  children,
  classes,
}) => (
  <MUIFormHelperText className={classes.root} error={error}>
    {children}
  </MUIFormHelperText>
);

export default withStyles(styles)(FormHelperText);
