import MUITreeView from '@material-ui/lab/TreeView';
import * as React from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import * as cn from 'classnames';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import { ItemTypes, DragItem } from '../DragLayer/DragItemTypes';
import TreeViewItem from './TreeViewItem';
import TreeViewItemDragPreview from './TreeViewItemDragPreview';
import TreeViewContext from './TreeViewContext';

export interface TreeViewProps extends WithStyles<typeof styles> {
  expanded?: string[];
  selected?: string[];
  onNodeToggle?: (nodeIds: string[]) => void;
  onNodeSelect?: (nodeIds: string[]) => void;
  onDrop?: (nodeIds: string[]) => void;
  onCanDrop?: (nodeIds: string[]) => boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {},

    isOver: {
      backgroundColor: theme.palette.action.selected,
    },
  });

export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  expanded = [],
  selected = [],
  onNodeToggle,
  onNodeSelect,
  onDrop,
  onCanDrop = () => true,
  classes,
  children,
}) => {
  const [isDraggingGlobal, setIsDragging] = React.useState(false);
  const getSelected = React.useCallback(() => selected, [selected]);
  const onDragStart = React.useCallback(() => setIsDragging(true), []);
  const onDragEnd = React.useCallback(() => setIsDragging(false), []);

  const [{ isOver }, dropRef] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item: DragItem) => {
      if (onDrop && isOver) {
        onDrop(item.stack);
      }
    },
    collect: (monitor: DropTargetMonitor) => {
      const item = monitor.getItem() as DragItem | null;
      if (!item) return { isOver: false };
      return {
        isOver: monitor.isOver({ shallow: true }) && onCanDrop(item.stack),
      };
    },
  });

  return (
    <TreeViewContext.Provider
      value={{
        getSelected,
        isDraggingGlobal,
        onDragStart,
        onDragEnd,
      }}
    >
      <MUITreeView
        ref={dropRef}
        multiSelect
        className={cn(classes.root, isOver && classes.isOver)}
        expanded={expanded}
        selected={selected}
        onNodeToggle={
          onNodeToggle ? (_, nodeIds) => onNodeToggle(nodeIds) : null
        }
        onNodeSelect={
          onNodeSelect
            ? (_: any, nodeIds: string[]) => onNodeSelect(nodeIds)
            : null
        }
      >
        {children}
      </MUITreeView>
    </TreeViewContext.Provider>
  );
};

export default Object.assign(withStyles(styles)(TreeView), {
  Item: TreeViewItem,
  DragPreview: TreeViewItemDragPreview,
});
