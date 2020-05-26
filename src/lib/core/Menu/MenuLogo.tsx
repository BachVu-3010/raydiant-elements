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
  href?: string;
  width?: string | number;
  onClick?: () => any;
  children?: React.ReactNode | RenderFn;
}

export const MenuLogo: React.SFC<MenuLogoProps> = ({
  square = false,
  href,
  width,
  onClick,
  classes,
  children,
}) => {
  if (isRenderFn(children)) {
    return children({
      className: classes.root,
      Logo: <Logo square={square} width={width} />,
    });
  }

  return (
    <a href={href} onClick={preventDefault(onClick)} className={classes.root}>
      <Logo square={square} width={width} />
    </a>
  );
};

export default withStyles(styles)(MenuLogo);
