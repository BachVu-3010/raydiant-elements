import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { preventDefault } from '../../helpers';
import styles from './MenuItem.styles';

export interface MenuItemProps extends WithStyles<typeof styles> {
  /** The label of the menu item */
  label: string;
  /** Set to true when the menu item is active */
  active?: boolean;
  /** Set href to render  */
  href?: string;
  /** Called when the menu item is clicked */
  onClick?: () => any;
  isDrawerItem?: boolean;
}

export const MenuItem: React.SFC<MenuItemProps> = ({
  label,
  active = false,
  href = '',
  onClick,
  classes,
  isDrawerItem,
}) => (
  <a
    href={href}
    onClick={preventDefault(onClick)}
    className={cn(
      classes.root,
      active && classes.active,
      isDrawerItem && classes.drawer,
    )}
  >
    {label}
  </a>
);

export default withStyles(styles)(MenuItem);
