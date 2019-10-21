import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { preventDefault } from '../../helpers';
import Logo from '../Logo';
import styles from './MenuLogo.styles';

type RenderFn = (
  props: { className: string; Logo: React.ReactElement<any> },
) => React.ReactElement<any>;

const isRenderFn = (value: any): value is RenderFn =>
  typeof value === 'function';

export interface MenuLogoProps extends WithStyles<typeof styles> {
  square?: boolean;
  /** Set href to render  */
  href?: string;
  /** Called when the menu item is clicked */
  onClick?: () => any;
  children?: React.ReactNode | RenderFn;
}

export const MenuLogo: React.SFC<MenuLogoProps> = ({
  square = false,
  href,
  onClick,
  classes,
  children,
}) => {
  if (isRenderFn(children)) {
    return children({
      className: classes.root,
      Logo: <Logo square={square} />,
    });
  }

  return (
    <a href={href} onClick={preventDefault(onClick)} className={classes.root}>
      <Logo square={square} />
    </a>
  );
};

export default withStyles(styles)(MenuLogo);
