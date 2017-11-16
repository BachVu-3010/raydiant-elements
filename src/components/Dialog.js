import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MUIDialog from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';

const propTypes = {
  /** Child elements are used as the dialog content. */
  children: PropTypes.node,
  className: PropTypes.string,
  /** Prevent clicks on the backdrop from closing the dialog */
  ignoreBackdropClick: PropTypes.bool,
  /** Modal is open */
  open: PropTypes.bool,
  /** Called when the user closes the dialog */
  onRequestClose: PropTypes.func,
};
const defaultProps = {
  children: null,
  className: null,
  ignoreBackdropClick: false,
  onRequestClose: undefined,
  open: false,
};

/**
 * Use dialogs for tasks that the user should focus on, above all else.
 *
 * For proper formatting:
 * * Wrap titles in a [DialogTitle](#dialogtitle) component.
 * * Wrap dialog content in a [DialogContent](#dialogcontent) component.
 * * Wrap action buttons (e.g., "OK", "Cancel") in a [DialogActions](#dialogactions) component.
 */
const Dialog = ({ children, classes, className, ignoreBackdropClick, open, onRequestClose }) =>
  <MUIDialog
    className={classnames(classes.root, className)}
    maxWidth="md"
    {...{ ignoreBackdropClick, onRequestClose, open }}
  >{children}</MUIDialog>;
Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export const styles = theme => ({
  root: {
    ...theme.typography.body1,
  },
});

export default withStyles(styles)(Dialog);
