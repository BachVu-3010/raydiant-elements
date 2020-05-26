import * as React from 'react';
import { DndProvider as ReactDNDProvider } from 'react-dnd';
import * as isTouchDevice from 'is-touch-device';
import Html5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

const DndProvider: React.FunctionComponent = ({ children }) => (
  <ReactDNDProvider
    backend={isTouchDevice() ? TouchBackend : Html5Backend}
    options={{ delayTouchStart: 150 }}
  >
    {children}
  </ReactDNDProvider>
);

export default DndProvider;
