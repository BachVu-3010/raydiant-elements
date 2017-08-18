import React from 'react';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * Page title.
 */
const Heading3 = ({ classes, children }) => <h4 className={classes.display1}>{children}</h4>;
Heading3.propTypes = propTypes;
Heading3.defaultProps = defaultProps;

export default withStyles(styleSheet)(Heading3);
