import * as React from 'react';

interface TreeViewContext {
  isDraggingGlobal: boolean;
  getSelected: () => string[];
  onDragStart: () => void;
  onDragEnd: () => void;
}

export default React.createContext<TreeViewContext>({
  isDraggingGlobal: true,
  getSelected: () => [],
  onDragStart: () => {
    return;
  },
  onDragEnd: () => {
    return;
  },
});
