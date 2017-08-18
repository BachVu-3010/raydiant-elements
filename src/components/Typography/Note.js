import React from 'react';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * For supporting text, like notes or captions.
 */
const Note = ({ classes, children }) => <span className={classes.caption}>{children}</span>;
Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

export default withStyles(styleSheet)(Note);
