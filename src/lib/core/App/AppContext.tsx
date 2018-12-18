import * as React from 'react';

interface AppContextProps {
  modalRoot: HTMLDivElement;
  popoverRoot: HTMLDivElement;
}

const AppContext = React.createContext<AppContextProps>({
  modalRoot: null,
  popoverRoot: null,
});

export default AppContext;
