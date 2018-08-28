import * as React from 'react';
import Hidden from '../../core/Hidden';
import withStyles, { WithStyles } from '../../core/withStyles';
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
