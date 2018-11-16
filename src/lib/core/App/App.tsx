import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import styles from './App.styles';

interface AppProps extends WithStyles<typeof styles> {}

export const App: React.SFC<AppProps> = ({ children, classes }) => (
  <div className={classes.root}>
    <CssBaseline />
    {children}
  </div>
);

export default withThemeSelector(withStyles(styles)(App));
