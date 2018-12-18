import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContext } from '../App';

export const PopoverPortal: React.SFC<{}> = ({ children }) => (
  <AppContext.Consumer>
    {({ popoverRoot }) => {
      if (popoverRoot) {
        return ReactDOM.createPortal(children, popoverRoot);
      }
      return null;
    }}
  </AppContext.Consumer>
);

export default PopoverPortal;
