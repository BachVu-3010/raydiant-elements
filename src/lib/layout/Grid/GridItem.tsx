import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './GridItem.styles';

export interface GridItemProps extends WithStyles<typeof styles> {}

export const GridItem: React.SFC<GridItemProps> = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(GridItem);
