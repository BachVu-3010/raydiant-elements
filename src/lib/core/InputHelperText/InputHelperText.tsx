import MUIFormHelperText from '@material-ui/core/FormHelperText';
import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './InputHelperText.styles';

interface HelperTextProps extends WithStyles<typeof styles> {
  error?: boolean;
  disabled?: boolean;
  indent?: boolean;
  className?: string;
}

const HelperText: React.SFC<HelperTextProps> = ({
  className,
  error,
  disabled,
  indent,
  children,
  classes,
}) => (
  <MUIFormHelperText
    className={cn(classes.root, indent && classes.indent, className)}
    classes={{ error: classes.error }}
    error={error}
    disabled={disabled}
  >
    {children}
  </MUIFormHelperText>
);

export default withStyles(styles)(HelperText);
