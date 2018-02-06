import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * For supporting text, like notes or captions.
 */
const Note = ({ classes, className, children }) => (
  <span className={classnames(classes.caption, className)}>{children}</span>
);
Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

export default withStyles(styleSheet)(Note);
