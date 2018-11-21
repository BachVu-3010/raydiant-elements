import * as React from 'react';
import * as ReactDOM from 'react-dom';

const modalAttribute = 'data-modal-root';

export class ModalPortal extends React.Component<{}, {}> {
  modalRoot: HTMLDivElement;

  constructor(props: any) {
    super(props);
    // Re-use the same modal root for all modals.
    this.modalRoot =
      document.querySelector(`[${modalAttribute}]`) || this.createModalRoot();
  }

  componentDidMount() {
    document.body.appendChild(this.modalRoot);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
  }

  createModalRoot() {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute(modalAttribute, '');
    return modalRoot;
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.modalRoot);
  }
}

export default ModalPortal;
