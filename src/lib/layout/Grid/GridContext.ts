import * as React from 'react';

interface GridContext {
  gridItemClassName: string;
  isDraggingGlobal: boolean;
  getDragStack: (nodeId: string) => string[];
  onDragStart: () => void;
  onDragEnd: () => void;
  addNodeToNodeMap: (nodeId: string, domNode: HTMLElement) => void;
  removeNodeFromNodeMap: (nodeId: string) => void;
}

export default React.createContext<GridContext>({
  gridItemClassName: '',
  isDraggingGlobal: true,
  getDragStack: nodeId => [nodeId],
  onDragStart: () => {
    return;
  },
  onDragEnd: () => {
    return;
  },
  addNodeToNodeMap: () => {
    return;
  },
  removeNodeFromNodeMap: () => {
    return;
  },
});
