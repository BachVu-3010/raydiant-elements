import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '../styles/ThemeProvider';
import Container from './Container';

const propTypes = {
  /** The theme to use. */
  theme: PropTypes.oneOf(['light', 'dark', 'gray']),
  children: PropTypes.node,
};
const defaultProps = {
  theme: 'light',
  children: null,
};

/**
 * Top-level component for Elements.
 */
const App = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
);
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
