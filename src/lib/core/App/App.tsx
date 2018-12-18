import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import styles from './App.styles';
import AppContext from './AppContext';

interface AppProps extends WithStyles<typeof styles> {}

export class App extends React.Component<AppProps> {
  modalRoot = document.createElement('div');
  popoverRoot = document.createElement('div');

  initRoots = (root: HTMLElement) => {
    if (root) {
      this.modalRoot.setAttribute('data-modal-root', '');
      this.popoverRoot.setAttribute('data-popover-root', '');
      root.appendChild(this.modalRoot);
      root.appendChild(this.popoverRoot);
    }
  };

  render() {
    const { classes, children } = this.props;
    return (
      <AppContext.Provider
        value={{ modalRoot: this.modalRoot, popoverRoot: this.popoverRoot }}
      >
        <div className={classes.root} ref={this.initRoots}>
          <CssBaseline />
          {children}
        </div>
      </AppContext.Provider>
    );
  }
}

export default withThemeSelector(withStyles(styles)(App));
