import * as cn from 'classnames';
import * as React from 'react';
import {
  useDrag,
  useDrop,
  DragSourceMonitor,
  DropTargetMonitor,
} from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import withStyles, { WithStyles } from '../../core/withStyles';
import { ItemTypes, DragItem } from '../../core/DragLayer/DragItemTypes';
import styles from './GridItem.styles';
import GridContext from './GridContext';

export interface GridItemDraggableProps extends WithStyles<typeof styles> {
  nodeId: string;
  onDrop?: (nodeIds: string[]) => void;
  onCanDrop?: (nodeIds: string[]) => boolean;
  children: (ref: (ref: React.RefObject<any>) => void) => React.ReactNode;
}

export const GridItemDraggable: React.FunctionComponent<
  GridItemDraggableProps
> = ({ nodeId, onDrop, onCanDrop, classes, children }, ref) => {
  const rootRef = React.useRef(null);
  const itemRef = React.useRef(null);
  const {
    gridItemClassName,
    getDragStack,
    isDraggingGlobal,
    onDragStart,
    onDragEnd,
    addNodeToNodeMap,
    removeNodeFromNodeMap,
  } = React.useContext(GridContext);

  // Add grid item to parent node map.
  React.useEffect(
    () => {
      addNodeToNodeMap(nodeId, rootRef.current);
      return () => removeNodeFromNodeMap(nodeId);
    },
    [rootRef.current],
  );

  const [{ dragStack }, dragRef, dragPreview] = useDrag({
    item: {
      type: ItemTypes.GridItem,
      stack: [],
      boundingRect: { height: 0, width: 0, x: 0, y: 0 },
    },
    begin: () => {
      onDragStart();

      // // Ensure the node that is being dragged is first in the drag stack.
      // const stack = [nodeId, ...getSelected().filter(id => id !== nodeId)];
      const { height, width, x, y } = itemRef.current.getBoundingClientRect();

      return {
        type: ItemTypes.GridItem,
        stack: getDragStack(nodeId),
        boundingRect: { height, width, x, y },
      };
    },
    end: () => {
      onDragEnd();
    },
    collect: (monitor: DragSourceMonitor) => {
      const item: DragItem | null = monitor.getItem();
      return {
        dragStack: item ? item.stack : [],
      };
    },
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

  const isDragging = isDraggingGlobal && dragStack.includes(nodeId);

  const combinedRef = (innerRef: React.RefObject<any>) => {
    dragRef(innerRef);
    if (onDrop) {
      dropRef(innerRef);
    }
    itemRef.current = innerRef;
  };

  return (
    <div
      ref={innerRef => {
        rootRef.current = innerRef;
        if (ref) {
          ref.current = innerRef;
        }
      }}
      className={cn(
        gridItemClassName,
        isDragging && classes.isDragging,
        isOver && classes.isOver,
      )}
    >
      {children(combinedRef)}
    </div>
  );
};

export default withStyles(styles)(React.forwardRef(GridItemDraggable));
