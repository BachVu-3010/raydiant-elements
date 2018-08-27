import * as React from 'react';
import Button from '../../core/Button';
import Theme from '../../core/Theme';
import withStyles, { WithStyles } from '../../core/withStyles';
import Overlay from '../../internal/Overlay';
import Spacer from '../../internal/Spacer';
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
          <Theme type="dark">
            <Button icon="menu" onClick={open ? onClose : onOpen} />
          </Theme>
        </div>
      </div>
      <Theme type="light">
        <MenuDrawer open={open} onClose={onClose}>
          {items}
        </MenuDrawer>
      </Theme>
    </div>
  );
};

export default Object.assign(withStyles(styles)(Menu), {
  Logo: MenuLogo,
  Item: MenuItem,
  Spacer,
});
