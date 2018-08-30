import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../Hidden';
import styles from './OneThirdLayoutColumnLarge.styles';

export interface OneThirdLayoutColumnLargeProps
  extends WithStyles<typeof styles> {}

export const OneThirdLayoutColumnLarge: React.SFC<
  OneThirdLayoutColumnLargeProps
> = ({ children, classes }) => (
  <Hidden xsDown>
    <div className={classes.root}>{children}</div>
  </Hidden>
);

export default withStyles(styles)(OneThirdLayoutColumnLarge);
