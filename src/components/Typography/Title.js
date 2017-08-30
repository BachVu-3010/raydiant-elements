import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * Page title. The largest available text.
 */
const Title = ({ classes, className, children }) =>
  <h1 className={classnames(classes.display4, className)}>{children}</h1>;
Title.propTypes = { ...propTypes };
Title.defaultProps = { ...defaultProps };

export default withStyles(styleSheet)(Title);
