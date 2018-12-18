import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContext } from '../App';

export const ModalPortal: React.SFC<{}> = ({ children }) => (
  <AppContext.Consumer>
    {({ modalRoot }) => {
      if (modalRoot) {
        return ReactDOM.createPortal(children, modalRoot);
      }
      return null;
    }}
  </AppContext.Consumer>
);

export default ModalPortal;
