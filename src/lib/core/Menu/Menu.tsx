import * as cn from 'classnames';
import * as React from 'react';
import Button from '../../core/Button';
import ThemeSelector from '../../core/ThemeSelector';
import withStyles, { WithStyles } from '../../core/withStyles';
import Overlay from '../../internal/Overlay';
import styles from './Menu.styles';
import MenuBack from './MenuBack';
import MenuDrawer from './MenuDrawer';
import MenuItem from './MenuItem';
import MenuLogo from './MenuLogo';

interface MenuProps extends WithStyles<typeof styles> {
  title?: string;
  open?: boolean;
  collapsed?: boolean;
  onOpen?: () => any;
  onClose?: () => any;
}

export const Menu: React.SFC<MenuProps> = ({
  title,
  open = false,
  collapsed = false,
  onOpen,
  onClose,
  classes,
  children,
}) => {
  const [logo, ...items] = React.Children.toArray(children);

  if (!title) {
    const activeChild = items.find(
      child => child && typeof child === 'object' && child.props.active,
    );
    title =
      activeChild && typeof activeChild === 'object' && activeChild.props.label;
  }

  return (
    <div className={cn(classes.root, collapsed && classes.isCollapsed)}>
      {open && <Overlay className={classes.overlay} onClick={onClose} />}
      <div className={classes.header}>
        {logo}
        <div className={classes.items}>{items}</div>
        <div className={classes.collapsed}>
          <div className={classes.label}>{title}</div>
          <ThemeSelector color="dark">
            <Button icon="menu" onClick={open ? onClose : onOpen} />
          </ThemeSelector>
        </div>
      </div>
      <ThemeSelector color="light">
        <MenuDrawer open={open} onClose={onClose}>
          {items}
        </MenuDrawer>
      </ThemeSelector>
    </div>
  );
};

export default Object.assign(withStyles(styles)(Menu), {
  Logo: MenuLogo,
  Item: MenuItem,
  Back: MenuBack,
});
