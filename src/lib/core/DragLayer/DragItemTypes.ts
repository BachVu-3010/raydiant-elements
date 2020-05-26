export enum ItemTypes {
  TreeViewItem = 'treeViewItem',
  GridItem = 'gridItem',
}

export interface DragItem {
  type: ItemTypes;
  stack: string[];
  boundingRect: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}
