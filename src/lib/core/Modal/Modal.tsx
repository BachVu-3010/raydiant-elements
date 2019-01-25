import * as React from 'react';
import Overlay from '../../internal/Overlay';
import withStyles, { WithStyles } from '../withStyles';
import withThemeSelector from '../withThemeSelector';
import styles from './Modal.styles';
import ModalPortal from './ModalPortal';

interface ModalProps extends WithStyles<typeof styles> {
  /** Opens the modal when true */
  open: boolean;
  /** Called when the user clicks the overlay  */
  onOverlayClick?: () => any;
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

    return (
      <ModalPortal>
        {open && (
          <div className={classes.root}>
            <Overlay className={classes.overlay} onClick={onOverlayClick} />
            <div className={classes.modal}>{children}</div>
          </div>
        )}
      </ModalPortal>
    );
  }
}

export default withThemeSelector(withStyles(styles)(Modal));
