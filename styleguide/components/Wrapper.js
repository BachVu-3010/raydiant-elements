import React from 'react';
import App from '../../src/components/App';
import SelectField from '../../src/components/SelectField';

class Wrapper extends React.Component {
  state = { theme: 'light' };
  handleThemeChange = evt => {
    this.setState({ theme: evt.target.value });
  };
  render = () => (
    <App theme={this.state.theme}>
      <div style={{ padding: '10px' }}>
        <div style={{ width: 100 }}>
          <SelectField
            label="Theme"
            value={this.state.theme}
            onChange={this.handleThemeChange}
          >
            <option value="light">Light</option>
            <option value="gray">Gray</option>
            <option value="dark">Dark</option>
          </SelectField>
        </div>
      </div>
      <div style={{ padding: '10px' }}>{this.props.children}</div>
    </App>
  );
}
export default Wrapper;
