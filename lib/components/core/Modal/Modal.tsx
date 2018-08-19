import * as React from 'react';
import Overlay from '../../internal/Overlay';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Modal.styles';

interface ModalProps extends WithStyles<typeof styles> {
  /** Opens the modal when true */
  open: boolean;
  /** Called when the user clicks the overlay  */
  onOverlayClick: () => any;
}

export class Modal extends React.Component<ModalProps, {}> {
  modalRoot = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.modalRoot);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
  }

  render() {
    const { open, onOverlayClick, children, classes } = this.props;

    if (!open) return null;

    return (
      <>
        <Overlay onClick={onOverlayClick} />
        <div className={classes.root}>{children}</div>
      </>
    );
  }
}

export default withStyles(styles)(Modal);
