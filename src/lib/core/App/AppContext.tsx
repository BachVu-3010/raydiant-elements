import * as React from 'react';

export interface AppContextProps {
  modalRoot: HTMLElement;
  popoverRoot: HTMLElement;
}

const AppContext = React.createContext<AppContextProps>({
  modalRoot: null,
  popoverRoot: null,
});

export default AppContext;
