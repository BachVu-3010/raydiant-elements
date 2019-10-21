import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Overlay from '../../internal/Overlay';
import styles from './MenuDrawer.styles';

export interface MenuDrawerProps extends WithStyles<typeof styles> {
  open: boolean;
  onOverlayClick?: () => any;
}

export const MenuDrawer: React.SFC<MenuDrawerProps> = ({
  open,
  onOverlayClick,
  classes,
  children,
}) => {
  // TODO: Animate drawer
  if (!open) return null;
  return (
    <>
      <Overlay onClick={onOverlayClick} />
      <div className={classes.root}>
        <div className={classes.drawer}>{children}</div>
      </div>
    </>
  );
};

export default withStyles(styles)(MenuDrawer);
