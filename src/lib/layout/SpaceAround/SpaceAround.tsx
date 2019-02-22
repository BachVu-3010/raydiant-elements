import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './SpaceAround.styles';

interface SpaceAroundProps extends WithStyles<typeof styles> {
  /** Additional class name(s) */
  className?: string;
  /** Set to true to display inline */
  inline?: boolean;
}

export const SpaceAround: React.SFC<SpaceAroundProps> = ({
  className,
  classes,
  children,
}) => <div className={cn(classes.root, className)}>{children}</div>;

export default withStyles(styles)(SpaceAround);
