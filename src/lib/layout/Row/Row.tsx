import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Row.styles';

interface RowProps extends WithStyles<typeof styles> {
  /** Additional class name(s) */
  className?: string;
  /** Set to true to display inline */
  inline?: boolean;
  center?: boolean;
  halfMargin?: boolean;
}

export const Row: React.SFC<RowProps> = ({
  className,
  inline,
  halfMargin,
  center,
  classes,
  children,
}) => {
  return (
    <div
      className={cn(
        classes.root,
        inline && classes.inline,
        center && classes.center,
        halfMargin && classes.halfMargin,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(Row);
