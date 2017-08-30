import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Heading1 } from './Typography';

const propTypes = {
  /** Child elements are used as the dialog content. */
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};

/**
 * Formats a dialog title with the appropriate size, padding, etc.
 */
const DialogTitle = ({ children, classes }) =>
  <Heading1 className={classes.root}>{children}</Heading1>;
DialogTitle.propTypes = propTypes;
DialogTitle.defaultProps = defaultProps;

const styles = theme => {
  const spacing = theme.spacing.unit * 3;
  return {
    root: {
      margin: 0,
      padding: `${spacing}px ${spacing}px 20px ${spacing}px`,
      flex: '0 0 auto',
    },
  };
};

export default withStyles(styles)(DialogTitle);
