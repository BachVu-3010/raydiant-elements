import React from 'react';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps } from './shared';

export const styles = theme => ({
  link: {
    color: theme.palette.primary[300],
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
});

/**
 * A link
 */
const Anchor = ({ classes, children, ...rest }) =>
  <a className={classes.link} {...rest}>{children}</a>;
Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;

export default withStyles(styles)(Anchor);
