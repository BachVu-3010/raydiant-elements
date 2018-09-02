import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './LoginScreenHeader.styles';

export interface LoginScreenHeaderProps extends WithStyles<typeof styles> {}

export const LoginScreenHeader: React.SFC<LoginScreenHeaderProps> = ({
  children,
  classes,
}) => <div className={classes.root}>{children}</div>;

export default withStyles(styles)(LoginScreenHeader);
