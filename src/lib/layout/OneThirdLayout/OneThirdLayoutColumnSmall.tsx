import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './OneThirdLayoutColumnSmall.styles';

export interface OneThirdLayoutColumnSmallProps
  extends WithStyles<typeof styles> {
  className?: string;
}

export const OneThirdLayoutColumnSmall: React.SFC<
  OneThirdLayoutColumnSmallProps
> = ({ className, children, classes }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

export default withStyles(styles)(OneThirdLayoutColumnSmall);
