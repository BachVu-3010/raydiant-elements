import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Column.styles';

interface ColumnProps extends WithStyles<typeof styles> {
  /** Additional class name(s) */
  className: string;
  /** Set to true to display inline */
  inline: boolean;
}

export const Column: React.SFC<ColumnProps> = ({
  className,
  inline,
  classes,
  children,
}) => (
  <div className={cn(classes.root, inline && classes.inline, className)}>
    {children}
  </div>
);

export default withStyles(styles)(Column);
