import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Menu.styles';
import MenuBack from './MenuBack';
import MenuDrawer from './MenuDrawer';
import MenuDrawerCTA from './MenuDrawerCTA';
import MenuDrawerItem from './MenuDrawerItem';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import MenuLogo from './MenuLogo';
import MenuTitle from './MenuTitle';

interface MenuProps extends WithStyles<typeof styles> {
  fixed?: boolean;
}

export const Menu: React.SFC<MenuProps> = ({
  fixed = false,
  classes,
  children,
}) => {
  return (
    <div className={cn(classes.root, fixed && classes.fixed)}>{children}</div>
  );
};

export default Object.assign(withStyles(styles)(Menu), {
  Header: MenuHeader,
  Logo: MenuLogo,
  Item: MenuItem,
  Back: MenuBack,
  Drawer: MenuDrawer,
  DrawerItem: MenuDrawerItem,
  DrawerCTA: MenuDrawerCTA,
  Title: MenuTitle,
});
