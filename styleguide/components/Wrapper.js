import React from 'react';
import App from '../../src/components/App';
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
      <App theme={this.state.theme}><div style={{ padding: '10px' }}>{this.props.children}</div></App>
    </div>;
}
export default Wrapper;
