import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ModalPortal extends React.Component<{}, {}> {
  modalRoot = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.modalRoot);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.modalRoot);
  }
}

export default ModalPortal;
