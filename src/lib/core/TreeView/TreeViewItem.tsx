import MUITreeViewContext from '@material-ui/lab/esm/TreeView/TreeViewContext';
import MUITreeItem from '@material-ui/lab/TreeItem';
import * as cn from 'classnames';
import * as React from 'react';
import {
  useDrag,
  useDrop,
  DragSourceMonitor,
  DropTargetMonitor,
} from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import withStyles, { WithStyles } from '../withStyles';
import { ItemTypes, DragItem } from '../DragLayer/DragItemTypes';
import styles from './TreeViewItem.styles';
import TreeViewContext from './TreeViewContext';
import TreeViewItemLabel from './TreeViewItemLabel';

export interface TreeViewItemProps {
  nodeId: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  expandable?: boolean;
  draggable?: boolean;
  isLoading?: boolean;
  onExpansion?: (expanded: boolean) => void;
  onDrop?: (nodeIds: string[]) => void;
  onCanDrop?: (nodeIds: string[]) => boolean;
  // Injected by parent TreeViewItem
  indent?: number;
}

export interface TreeViewItemPropsWithStyles
  extends TreeViewItemProps,
    WithStyles<typeof styles> {}

export const TreeViewItem: React.FunctionComponent<
  TreeViewItemPropsWithStyles
> = ({
  nodeId,
  icon,
  label,
  indent = 0,
  expandable = false,
  draggable = false,
  isLoading = false,
  onExpansion,
  onDrop,
  onCanDrop = () => !!onDrop,
  classes,
  children,
}) => {
  const { isSelected, isExpanded, toggleExpansion } = React.useContext(
    MUITreeViewContext,
  );
  const {
    isDraggingGlobal,
    onDragStart,
    onDragEnd,
    getSelected,
  } = React.useContext(TreeViewContext);
  const expanded = isExpanded(nodeId);

  const labelRef = React.useRef(null);

  const [{ isDragging }, dragRef, dragPreview] = useDrag({
    item: {
      type: ItemTypes.TreeViewItem,
      stack: [],
      boundingRect: { height: 0, width: 0, x: 0, y: 0 },
    },
    begin: () => {
      onDragStart();

      // Ensure the node that is being dragged is first in the drag stack.
      const stack = [nodeId, ...getSelected().filter(id => id !== nodeId)];
      const { height, width, x, y } = labelRef.current.getBoundingClientRect();

      return {
        type: ItemTypes.TreeViewItem,
        stack,
        boundingRect: { height, width, x, y },
      };
    },
    end: () => {
      onDragEnd();
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Disable the HTML5 drag preview image becuase we are rendering our
  // own custom drag layer.
  React.useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, []);

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
    <MUITreeItem
      ref={ref => {
        if (draggable) {
          dragRef(ref);
        }
        if (onDrop) {
          dropRef(ref);
        }
      }}
      nodeId={nodeId}
      label={
        <TreeViewItemLabel
          ref={labelRef}
          indent={indent}
          icon={icon}
          label={label}
          isLoading={isLoading}
          isExpandable={expandable}
          isExpanded={expanded}
          onExpansion={event => {
            if (!expandable) return;
            event.stopPropagation();

            toggleExpansion(event, nodeId);
            if (onExpansion) {
              onExpansion(!expanded);
            }
          }}
          onClick={event => {
            const isSelectingMultiple =
              event.shiftKey || event.ctrlKey || event.metaKey;
            if (!expandable || isSelectingMultiple) return;

            toggleExpansion(event, nodeId);
            if (onExpansion) {
              onExpansion(!expanded);
            }
          }}
        />
      }
      classes={{
        root: cn(
          classes.root,
          (isDragging || (isDraggingGlobal && isSelected(nodeId))) &&
            classes.isDragging,
          isOver && classes.isOver,
        ),
        content: classes.content,
        selected: classes.selected,
        expanded: classes.expanded,
        iconContainer: classes.iconContainer,
        label: classes.label,
        group: classes.group,
      }}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement<TreeViewItemProps>, {
          indent: indent + 1,
        }),
      )}
    </MUITreeItem>
  );
};

export default withStyles(styles)(TreeViewItem);
