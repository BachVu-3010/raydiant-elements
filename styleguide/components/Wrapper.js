import React from 'react';
import ThemeProvider from '../../src/styles/ThemeProvider';
import Switch from '../../src/components/Switch';

class Wrapper extends React.Component {
  state = { theme: 'light' }
  toggleTheme = () => {
    this.setState({ theme: (this.state.theme === 'light') ? 'dark' : 'light' });
  }
  render = () =>
    <div>
      <div>
        <Switch checked={this.state.theme === 'dark'} onChange={this.toggleTheme}>Dark</Switch>
      </div>
      <ThemeProvider theme={this.state.theme}><div style={{padding: '10px'}}>{this.props.children}</div></ThemeProvider>
    </div>;
}
export default Wrapper;
