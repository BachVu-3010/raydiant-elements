import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { preventDefault } from '../../helpers';
import styles from './MenuDrawerItem.styles';

type RenderFn = (
  props: { className: string; activeClassName: string },
) => React.ReactElement<any>;

const isRenderFn = (value: any): value is RenderFn =>
  typeof value === 'function';

export interface MenuDrawerItemProps extends WithStyles<typeof styles> {
  /** The label of the menu item */
  label?: string;
  /** Set to true when the menu item is active */
  active?: boolean;
  /** Set href to render  */
  href?: string;
  /** Set target of the href */
  target?: string;
  /** Called when the menu item is clicked */
  onClick?: () => any;
  children?: React.ReactNode | RenderFn;
}

export const MenuDrawerItem: React.SFC<MenuDrawerItemProps> = ({
  label,
  active = false,
  href = '',
  target,
  onClick,
  classes,
  children,
}) => {
  if (isRenderFn(children)) {
    return children({
      className: classes.root,
      activeClassName: classes.active,
    });
  }

  return (
    <a
      href={href}
      target={target}
      className={cn(classes.root, active && classes.active)}
      {...(onClick ? { onClick: preventDefault(onClick) } : {})}
    >
      {label}
    </a>
  );
};

export default withStyles(styles)(MenuDrawerItem);
