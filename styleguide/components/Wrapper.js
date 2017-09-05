import React from 'react';
import App from '../../src/components/App';
import Switch from '../../src/components/Switch';

class Wrapper extends React.Component {
  state = { theme: 'light' }
  toggleTheme = () => {
    this.setState({ theme: (this.state.theme === 'light') ? 'dark' : 'light' });
  }
  render = () =>
    <App theme={this.state.theme}>
      <div style={{ padding: '10px' }}>
        <Switch checked={this.state.theme === 'dark'} onChange={this.toggleTheme}>Dark</Switch>
      </div>
      <div style={{ padding: '10px' }}>{this.props.children}</div>
    </App>;
}
export default Wrapper;
