import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Overlay from '../../internal/Overlay';
import { AppContext, AppContextProps } from '../App';
import withStyles, { WithStyles } from '../withStyles';
import withThemeSelector from '../withThemeSelector';
import styles from './Modal.styles';

interface ModalProps {
  /** Opens the modal when true */
  open: boolean;
  /** Called when the user clicks the overlay  */
  onOverlayClick?: () => any;
}

export class Modal extends React.Component<
  ModalProps & AppContextProps & WithStyles<typeof styles>,
  {}
> {
  el = document.createElement('div');

  componentDidMount() {
    this.props.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.props.modalRoot.removeChild(this.el);
  }

  render() {
    const { open, onOverlayClick, children, classes } = this.props;

    if (!open) return null;

    return ReactDOM.createPortal(
      <div className={classes.root}>
        <Overlay className={classes.overlay} onClick={onOverlayClick} />
        <div className={classes.modal}>{children}</div>
      </div>,
      this.el,
    );
  }
}

const ModalWithStyles = withThemeSelector(withStyles(styles)(Modal));
const ModalRoot: React.SFC<ModalProps> = props => (
  <AppContext.Consumer>
    {appContextProps => <ModalWithStyles {...props} {...appContextProps} />}
  </AppContext.Consumer>
);

export default ModalRoot;
