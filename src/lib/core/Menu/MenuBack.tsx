import * as React from 'react';
import { preventDefault } from '../../helpers';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MenuBack.styles';

export interface MenuBackProps extends WithStyles<typeof styles> {
  /** Set href to render  */
  href: string;
  /** Called when the menu item is clicked */
  onClick?: () => any;
}

export const MenuBack: React.SFC<MenuBackProps> = ({
  href,
  onClick,
  classes,
}) => (
  <a href={href} onClick={preventDefault(onClick)} className={classes.root}>
    <Icon icon="arrowLeft" />
  </a>
);

export default withStyles(styles)(MenuBack);
