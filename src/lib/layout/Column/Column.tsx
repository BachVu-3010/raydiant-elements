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
  onClick?: () => void;
}

export const Column: React.SFC<ColumnProps> = ({
  className,
  inline,
  doubleMargin,
  flex,
  classes,
  children,
  onClick,
}) => (
  <div
    className={cn(
      classes.root,
      inline && classes.inline,
      doubleMargin && classes.doubleMargin,
      className,
    )}
    style={{ flex }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default withStyles(styles)(Column);
