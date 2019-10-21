import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MenuDrawerCTA.styles';

export interface MenuDrawerCTAProps extends WithStyles<typeof styles> {}

export const MenuDrawerCTA: React.SFC<MenuDrawerCTAProps> = ({
  children,
  classes,
}) => <div className={cn(classes.root)}>{children}</div>;

export default withStyles(styles)(MenuDrawerCTA);
