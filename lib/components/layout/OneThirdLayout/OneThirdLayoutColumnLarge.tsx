import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../Hidden';
import styles from './OneThirdLayoutColumnLarge.styles';

export interface OneThirdLayoutColumnLargeProps
  extends WithStyles<typeof styles> {
  className?: string;
}

export const OneThirdLayoutColumnLarge: React.SFC<
  OneThirdLayoutColumnLargeProps
> = ({ className, children, classes }) => (
  <Hidden smDown>
    <div className={cn(classes.root, className)}>{children}</div>
  </Hidden>
);

export default withStyles(styles)(OneThirdLayoutColumnLarge);
