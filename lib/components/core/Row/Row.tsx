import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Row.styles';

interface RowProps extends WithStyles<typeof styles> {
  /** Additional class name(s) */
  className: string;
  /** Set to true to display inline */
  inline: boolean;
}

export const Row: React.SFC<RowProps> = ({
  className,
  inline,
  classes,
  children,
}) => (
  <div className={cn(classes.root, inline && classes.inline, className)}>
    {children}
  </div>
);

export default withStyles(styles)(Row);
