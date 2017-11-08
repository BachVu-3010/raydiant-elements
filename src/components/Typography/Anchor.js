import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps } from './shared';

export const styles = theme => ({
  link: {
    color: theme.typography.anchor.color,
    textDecoration: 'none',
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
});

/**
 * A link
 */
const Anchor = ({ classes, className, children, ...rest }) => (
  <a className={classnames(classes.link, className)} {...rest}>
    {children}
  </a>
);
Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;

export default withStyles(styles)(Anchor);
