import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './MenuDrawer.styles';
import { MenuItemProps } from './MenuItem';

export interface MenuDrawerProps extends WithStyles<typeof styles> {
  open: boolean;
  onClose?: () => any;
}

export const MenuDrawer: React.SFC<MenuDrawerProps> = ({
  open,
  onClose,
  classes,
  children,
}) => {
  // TODO: Animate drawer
  if (!open) return null;

  const items = React.Children.map(
    children,
    (child: React.ReactElement<MenuItemProps>) =>
      // Inject isDrawerItem to MenuItem and intercept onClick to close drawer.
      React.cloneElement(child, {
        isDrawerItem: true,
        onClick: () => {
          if (child.props.onClick) {
            child.props.onClick();
          }
          onClose();
        },
      }),
  );
  return (
    <div className={classes.root}>
      <div className={classes.drawer}>{items}</div>
    </div>
  );
};

export default withStyles(styles)(MenuDrawer);
