import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MenuTitle.styles';

export interface MenuTitleProps extends WithStyles<typeof styles> {
  label: string;
}

export const MenuTitle: React.SFC<MenuTitleProps> = ({ label, classes }) => (
  <div className={classes.root}>{label}</div>
);

export default withStyles(styles)(MenuTitle);
