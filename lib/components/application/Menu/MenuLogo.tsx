import { withTheme } from '@material-ui/core/styles';
import * as React from 'react';
import { Theme } from '../../../theme';
import withStyles, { WithStyles } from '../../core/withStyles';
import { preventDefault } from '../../helpers';
import styles from './MenuLogo.styles';

export interface MenuLogoProps extends WithStyles<typeof styles> {
  /** Set href to render  */
  href: string;
  /** Called when the menu item is clicked */
  onClick: () => any;
  theme: Theme;
}

export const MenuLogo: React.SFC<MenuLogoProps> = ({
  href,
  onClick,
  classes,
  theme,
}) => (
  <a href={href} onClick={preventDefault(onClick)} className={classes.root}>
    <img src={theme.logo.contrast} style={{ width: theme.logo.width }} />
  </a>
);

export default withStyles(styles)(withTheme()(MenuLogo));
