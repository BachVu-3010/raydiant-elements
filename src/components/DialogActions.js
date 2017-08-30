import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Row from './Row';

const propTypes = {
  /** Child elements are used as the dialog content. */
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};

/**
 * Dialog buttons should be wrapped in a `<DialogActions>` element for correct
 * alignment and spacing.
 */
const DialogActions = ({ children, classes }) =>
  <Row className={classes.root} size="dynamic-padded" justifyContent="flex-end">{children}</Row>;
DialogActions.propTypes = propTypes;
DialogActions.defaultProps = defaultProps;

const styles = {
  root: {
    flex: '0 0 auto',
  },
};

export default withStyles(styles)(DialogActions);
