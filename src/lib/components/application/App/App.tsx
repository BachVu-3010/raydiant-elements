import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './App.styles';

interface AppProps extends WithStyles<typeof styles> {}

export const App: React.SFC<AppProps> = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(App);
