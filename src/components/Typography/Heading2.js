import React from 'react';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * Page title.
 */
const Heading2 = ({ classes, children }) => <h3 className={classes.display2}>{children}</h3>;
Heading2.propTypes = propTypes;
Heading2.defaultProps = defaultProps;

export default withStyles(styleSheet)(Heading2);
