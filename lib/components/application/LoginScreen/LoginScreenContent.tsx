import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './LoginScreenContent.styles';

export interface LoginScreenContentProps extends WithStyles<typeof styles> {}

export const LoginScreenContent: React.SFC<LoginScreenContentProps> = ({
  children,
  classes,
}) => <div className={classes.root}>{children}</div>;

export default withStyles(styles)(LoginScreenContent);
