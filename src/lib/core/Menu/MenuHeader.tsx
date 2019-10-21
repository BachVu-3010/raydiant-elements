import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './MenuHeader.styles';

export interface MenuHeaderProps extends WithStyles<typeof styles> {
  border?: boolean;
  shadow?: boolean;
  maxWidth?: number | string;
}

export const MenuHeader: React.SFC<MenuHeaderProps> = ({
  border = false,
  shadow = false,
  maxWidth,
  classes,
  children,
}) => {
  return (
    <div
      className={cn(
        classes.root,
        border && classes.border,
        shadow && classes.shadow,
      )}
    >
      <div className={classes.inner} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default withStyles(styles)(MenuHeader);
