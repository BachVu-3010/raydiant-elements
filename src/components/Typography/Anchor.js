import React from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { propTypes, defaultProps } from './shared';

export const styleSheet = createStyleSheet('MeAnchor', theme => ({
  link: {
    color: theme.palette.primary[300],
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
}));

/**
 * A link
 */
const Anchor = ({ classes, children, ...rest }) =>
  <a className={classes.link} {...rest}>{children}</a>;
Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;

export default withStyles(styleSheet)(Anchor);
