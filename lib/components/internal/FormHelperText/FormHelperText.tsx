import MUIFormHelperText from '@material-ui/core/FormHelperText';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './FormHelperText.styles';

interface FormHelperTextProps extends WithStyles<typeof styles> {}

const FormHelperText: React.SFC<FormHelperTextProps> = ({
  children,
  classes,
}) => (
  <MUIFormHelperText className={classes.root}>{children}</MUIFormHelperText>
);

export default withStyles(styles)(FormHelperText);
