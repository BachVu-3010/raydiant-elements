import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Column.styles';

interface ColumnProps extends WithStyles<typeof styles> {
  /** Additional class name(s) */
  className?: string;
  /** Set to true to display inline */
  inline?: boolean;
  doubleMargin?: boolean;
  flex?: number;
  onClick?: React.MouseEventHandler;
}

export const Column: React.SFC<ColumnProps> = (
  { className, inline, doubleMargin, flex, classes, children, onClick },
  ref,
) => (
  <div
    ref={ref}
    className={cn(
      classes.root,
      inline && classes.inline,
      doubleMargin && classes.doubleMargin,
      onClick && classes.clickable,
      className,
    )}
    style={{ flex }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default withStyles(styles)(React.forwardRef(Column));
