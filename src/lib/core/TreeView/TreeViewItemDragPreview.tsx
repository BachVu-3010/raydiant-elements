import * as React from 'react';
import TreeViewItemLabel from './TreeViewItemLabel';

export interface TreeViewItemDragPreviewProps {
  icon: React.ReactNode;
  label: string;
}

export const TreeViewItemDragPreview: React.FunctionComponent<
  TreeViewItemDragPreviewProps
> = ({ icon, label }) => (
  <TreeViewItemLabel icon={icon} label={label} isDragging />
);

export default TreeViewItemDragPreview;
