import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import themes from './themes';

const propTypes = {
  /** The theme to use. */
  theme: PropTypes.oneOf(['light', 'dark']),
};
const defaultProps = {
  theme: 'light',
};

const ThemeProvider = ({ theme, ...rest }) =>
  <MuiThemeProvider theme={themes[theme] || themes.default} {...rest} />;

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
