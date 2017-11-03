import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import themes from './themes';

const propTypes = {
  /** The theme to use. */
  theme: PropTypes.oneOf(['light', 'dark', 'gray']),
  children: PropTypes.node,
};
const defaultProps = {
  theme: 'light',
  children: null,
};

const ThemeProvider = ({ theme, children }) => (
  <MuiThemeProvider theme={themes[theme] || themes.default}>
    {children}
  </MuiThemeProvider>
);
ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
