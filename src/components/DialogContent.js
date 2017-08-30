import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const propTypes = {
  /** Child elements are used as the dialog content. */
  children: PropTypes.node,
  className: PropTypes.string,
  /** Don't add a gutter around the content.
   * Useful for images or other content that should go edge-to-edge. */
  noSpace: PropTypes.bool,
};
const defaultProps = {
  children: null,
  className: null,
  noSpace: false,
};

/**
 * Formats content with the appropriate padding, etc.
 */
const DialogContent = ({ children, classes, className, noSpace }) =>
  <div
    className={classnames(classes.root, { [classes.noSpace]: noSpace }, className)}
  >{children}</div>;
DialogContent.propTypes = propTypes;
DialogContent.defaultProps = defaultProps;

const styles = theme => {
  const spacing = theme.spacing.unit * 3;
  return {
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: `0 ${spacing}px`,
      '&:first-child': {
        marginTop: spacing,
      },
      '&:last-child': {
        marginBottom: spacing,
      },
    },
    noSpace: {
      padding: 0,
      '&:first-child': {
        marginTop: 0,
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
  };
};

export default withStyles(styles)(DialogContent);
