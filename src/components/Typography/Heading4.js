import React from 'react';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * Page title.
 */
const Heading4 = ({ classes, children }) => <h5 className={classes.headline}>{children}</h5>;
Heading4.propTypes = propTypes;
Heading4.defaultProps = defaultProps;

export default withStyles(styleSheet)(Heading4);
