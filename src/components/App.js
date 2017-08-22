import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import ThemeProvider from '../styles/ThemeProvider';

const propTypes = {
/** The theme to use. */
  theme: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node,
};
const defaultProps = {
  theme: 'light',
  children: null,
};

export const styleSheet = createStyleSheet('ME_App', theme => ({
  root: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.default,
  },
}));

const Container = ({ children, classes }) => <div className={classes.root}>{children}</div>;
Container.propTypes = {
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node,
};
Container.defaultProps = {
  children: null,
};
const StyledContainer = withStyles(styleSheet)(Container);

/**
 * Top-level component for Elements.
 */
const App = ({ children, theme }) => <ThemeProvider theme={theme}>
  <StyledContainer>{children}</StyledContainer>
</ThemeProvider>;
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
