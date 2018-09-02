import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './TabContainer.styles';

export interface TabContainerProps extends WithStyles<typeof styles> {}

const TabContainer: React.SFC<TabContainerProps> = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(TabContainer);
