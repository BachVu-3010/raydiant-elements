import * as React from 'react';
import Button from '../../core/Button';
import ThemeSelector from '../../core/ThemeSelector';
import withStyles, { WithStyles } from '../../core/withStyles';
import Overlay from '../../internal/Overlay';
import styles from './Menu.styles';
import MenuDrawer from './MenuDrawer';
import MenuItem from './MenuItem';
import MenuLogo from './MenuLogo';

interface MenuProps extends WithStyles<typeof styles> {
  open?: boolean;
  onOpen?: () => any;
  onClose?: () => any;
}

export const Menu: React.SFC<MenuProps> = ({
  open = false,
  onOpen,
  onClose,
  classes,
  children,
}) => {
  const [logo, ...items] = React.Children.toArray(children);
  const activeChild = items.find(
    child => child && typeof child === 'object' && child.props.active,
  );
  const activeLabel =
    activeChild && typeof activeChild === 'object' && activeChild.props.label;

  return (
    <div className={classes.root}>
      {open && <Overlay className={classes.overlay} onClick={onClose} />}
      <div className={classes.header}>
        {logo}
        <div className={classes.items}>{items}</div>
        <div className={classes.mobile}>
          <div className={classes.label}>{activeLabel}</div>
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
});
