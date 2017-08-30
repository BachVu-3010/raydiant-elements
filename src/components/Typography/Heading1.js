import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * A top-level heading.
 * @see See also: [Title](#title)
 */
const Heading1 = ({ children, classes, className }) =>
  <h2 className={classnames(classes.display3, className)}>{children}</h2>;
Heading1.propTypes = propTypes;
Heading1.defaultProps = defaultProps;

export default withStyles(styleSheet)(Heading1);
