import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MuiThemeProvider, createStyleSheet, withStyles } from 'material-ui/styles';
import themes from './themes';

const propTypes = {
  /** The theme to use. */
  theme: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node,
};
const defaultProps = {
  theme: 'light',
  children: null,
};

export const styleSheet = createStyleSheet('ME_Globals', theme => ({
  root: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.default,
  },
}));

const Container = ({ children, classes }) => {
  const className = classnames({
    [classes.root]: true,
  });
  return <div className={className}>{children}</div>;
};
Container.propTypes = {
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node,
};
Container.defaultProps = {
  children: null,
};
const WrappedContainer = withStyles(styleSheet)(Container);

const ThemeProvider = ({ theme, children, ...rest }) => <MuiThemeProvider
  theme={themes[theme] || themes.default}
  {...rest}
><WrappedContainer {...{ children }} /></MuiThemeProvider>;
ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
