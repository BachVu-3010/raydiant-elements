import React from 'react';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps, styleSheet } from './shared';

/**
 * Page title. The largest available text.
 */
const Title = ({ classes, children }) => <h1 className={classes.display4}>{children}</h1>;
Title.propTypes = { ...propTypes };
Title.defaultProps = { ...defaultProps };

export default withStyles(styleSheet)(Title);
