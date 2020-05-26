import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../Hidden';
import styles from './OneThirdLayoutColumnLarge.styles';
import OneThirdLayoutContext from './OneThirdLayoutContext';

export interface OneThirdLayoutColumnLargeProps
  extends WithStyles<typeof styles> {
  className?: string;
}

export const OneThirdLayoutColumnLarge: React.SFC<
  OneThirdLayoutColumnLargeProps
> = ({ className, children, classes }) => {
  const { collapseMode } = React.useContext(OneThirdLayoutContext);

  const columnEl = (
    <div className={cn(classes.root, className)}>{children}</div>
  );

  if (collapseMode === 'collapseLargeColumn') {
    return <Hidden xsDown>{columnEl}</Hidden>;
  }

  return columnEl;
};

export default withStyles(styles)(OneThirdLayoutColumnLarge);
