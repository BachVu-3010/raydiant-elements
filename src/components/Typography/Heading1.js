import React from 'react';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * A top-level heading.
 * @see See also: [Title](#title)
 */
const Heading1 = ({ classes, children }) => <h2 className={classes.display3}>{children}</h2>;
Heading1.propTypes = propTypes;
Heading1.defaultProps = defaultProps;

export default withStyles(styleSheet)(Heading1);
