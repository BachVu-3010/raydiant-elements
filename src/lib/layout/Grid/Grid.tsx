import * as cn from 'classnames';
import * as debounce from 'debounce';
import * as React from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import withStyles, { WithStyles } from '../../core/withStyles';
import { ItemTypes, DragItem } from '../../core/DragLayer/DragItemTypes';
import { doRectsIntersect, Rect } from '../../helpers';
import ScrollableContext from '../Scrollable/ScrollableContext';
import styles from './Grid.styles';
import GridItem from './GridItem';
import GridItemDraggable from './GridItemDraggable';
import GridContext from './GridContext';

export interface GridProps extends WithStyles<typeof styles> {
  className?: string;
  selected?: string[];
  selectable?: boolean;
  paddingTop?: boolean;
  containerRef?: React.RefObject<HTMLDivElement>;
  getDragStack?: (nodeId: string) => string[];
  onDrop?: (nodeIds: string[]) => void;
  onCanDrop?: (nodeIds: string[]) => boolean;
  onIntersect?: (nodeIds: string[]) => void;
  onSelect?: (nodeIds: string[]) => void;
}

interface XYPosition {
  x: number;
  y: number;
}

export const Grid: React.FunctionComponent<GridProps> = ({
  className,
  selected,
  containerRef,
  paddingTop = true,
  selectable = false,
  getDragStack,
  onDrop,
  onCanDrop = () => true,
  onIntersect,
  onSelect,
  classes,
  children,
}) => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  // Drag and drop.
  const [isDraggingGlobal, setIsDragging] = React.useState(false);
  const [{ gridWidth, itemWidth }, setSizes] = React.useState({
    gridWidth: 0,
    itemWidth: 0,
  });

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

  if (containerRef) {
    dropRef(containerRef);
  }

  // Drag to select.
  const { scrollRef } = React.useContext(ScrollableContext);
  const intersectedNodesRef = React.useRef([]);
  const selectionDragRef = React.useRef(null);
  const scrollTopRef = React.useRef(0);
  const nodeDomMap = React.useRef<{ [nodeId: string]: HTMLElement }>({});
  const [selectionStart, setSelectStartPos] = React.useState<XYPosition | null>(
    null,
  );

  const addNodeToNodeMap = (nodeId: string, domNode: HTMLElement) => {
    nodeDomMap.current[nodeId] = domNode;
  };

  const removeNodeFromNodeMap = (nodeId: string) => {
    delete nodeDomMap.current[nodeId];
  };

  const isBackgroundTarget = (event: MouseEvent) => {
    const classList = (
      (event.target as HTMLDivElement).getAttribute('class') || ''
    ).split(' ');

    return classList.some(c =>
      [classes.root, classes.dropzone, classes.grid, classes.gridItem].includes(
        c,
      ),
    );
  };

  const handleSelectionStart = (event: MouseEvent) => {
    if (!selectable || !onSelect) return;

    // Only handle mouse down on the background, not the grid items.
    if (!isBackgroundTarget(event)) return;

    event.preventDefault();

    if (!event.shiftKey) {
      onSelect([]);
    }

    setSelectStartPos({ x: event.clientX, y: event.clientY });

    scrollTopRef.current =
      scrollRef && scrollRef.current ? scrollRef.current.scrollTop : 0;
  };

  const handleSelectionDrag = (event: MouseEvent) => {
    if (!selectionStart || !selectionDragRef || !selectionDragRef.current) {
      return;
    }

    event.preventDefault();

    const pointerX = event.clientX;
    const pointerY = event.clientY;

    const rootRect = rootRef.current.getBoundingClientRect();
    const scrollTop =
      scrollRef && scrollRef.current ? scrollRef.current.scrollTop : 0;
    const scrollDistance = Math.abs(scrollTop - scrollTopRef.current);

    const selectionRect: Rect = {
      top:
        selectionStart.y < pointerY
          ? selectionStart.y - scrollDistance
          : pointerY,
      left: Math.min(selectionStart.x, pointerX),
      height: Math.abs(selectionStart.y - pointerY) + scrollDistance,
      width: Math.abs(selectionStart.x - pointerX),
    };

    const selectionRectRel: Rect = {
      ...selectionRect,
      top: selectionRect.top - rootRect.top,
      left: selectionRect.left - rootRect.left,
    };

    selectionDragRef.current.style.display = 'block';
    selectionDragRef.current.style.top = `${selectionRectRel.top}px`;
    selectionDragRef.current.style.left = `${selectionRectRel.left}px`;
    selectionDragRef.current.style.height = `${selectionRectRel.height}px`;
    selectionDragRef.current.style.width = `${selectionRectRel.width}px`;

    const intersectedNodesMap: { [nodeId: string]: boolean } = {};
    Object.entries(nodeDomMap.current).forEach(([nodeId, domNode]) => {
      const nodeRect = domNode.getBoundingClientRect() as DOMRect;
      if (doRectsIntersect(nodeRect, selectionRect)) {
        intersectedNodesMap[nodeId] = true;
      }
    });

    const intersectedNodes = Object.keys(intersectedNodesMap);

    if (intersectedNodes.length !== intersectedNodesRef.current.length) {
      onIntersect(intersectedNodes);
    }

    intersectedNodesRef.current = intersectedNodes;
  };

  const handleSelectionEnd = (event: MouseEvent) => {
    if (!selectable || !onSelect) return;

    setSelectStartPos(null);

    if (selectionDragRef.current) {
      selectionDragRef.current.style.display = 'none';
    }

    const hasIntersectedNodes = intersectedNodesRef.current.length > 0;

    // Clear selection when clicking on the background grid and did not
    // select any nodes.
    if (!hasIntersectedNodes && isBackgroundTarget(event)) {
      onSelect([]);
    } else if (hasIntersectedNodes && event.shiftKey && selected) {
      onSelect([
        ...selected,
        ...intersectedNodesRef.current.filter(
          nodeId => !selected.includes(nodeId),
        ),
      ]);
    } else if (hasIntersectedNodes) {
      onSelect(intersectedNodesRef.current);
    }

    intersectedNodesRef.current = [];
    onIntersect([]);
  };

  React.useEffect(
    () => {
      if (!containerRef || !containerRef.current) return;
      containerRef.current.addEventListener(
        'mousedown',
        handleSelectionStart,
        false,
      );

      return () => {
        if (!containerRef || !containerRef.current) return;
        containerRef.current.removeEventListener(
          'mousedown',
          handleSelectionStart,
          false,
        );
      };
    },
    [containerRef],
  );

  React.useEffect(
    () => {
      if (!containerRef || !containerRef.current) return;
      containerRef.current.addEventListener(
        'mouseup',
        handleSelectionEnd,
        false,
      );

      return () => {
        if (!containerRef || !containerRef.current) return;
        containerRef.current.removeEventListener(
          'mouseup',
          handleSelectionEnd,
          false,
        );
      };
    },
    [selected],
  );

  React.useEffect(
    () => {
      if (!containerRef || !containerRef.current) return;
      containerRef.current.addEventListener(
        'mousemove',
        handleSelectionDrag,
        false,
      );

      return () => {
        if (!containerRef || !containerRef.current) return;
        containerRef.current.removeEventListener(
          'mousemove',
          handleSelectionDrag,
          false,
        );
      };
    },
    [selectionStart],
  );

  // Fill remaining grid items in order to left align the last row.
  // If we don't need to support IE11 in the future, we can replace
  // this with css grid.
  const childrenCount = React.Children.count(children);

  React.useEffect(
    () => {
      const updateWidths = () => {
        let updatedGridWidth = 0;
        let updatedItemWidth = 0;

        if (gridRef.current) {
          const gridBounds = gridRef.current.getBoundingClientRect();
          const itemElement = gridRef.current.firstChild as HTMLElement;

          if (itemElement) {
            const itemBounds = itemElement.getBoundingClientRect();
            updatedGridWidth = gridBounds.width;
            updatedItemWidth = itemBounds.width;
          }
        }

        if (updatedGridWidth !== gridWidth || updatedItemWidth !== itemWidth) {
          setSizes({
            gridWidth: updatedGridWidth,
            itemWidth: updatedItemWidth,
          });
        }
      };

      const updateWidthsDebounced = debounce(updateWidths, 20);
      window.addEventListener('resize', updateWidthsDebounced);
      window.addEventListener('orientationchange', updateWidthsDebounced);

      updateWidths();

      return () => {
        window.removeEventListener('resize', updateWidthsDebounced);
        window.removeEventListener('orientationchange', updateWidthsDebounced);
      };
    },
    [childrenCount === 0],
  );

  const remainingElements: React.ReactNode[] = [];
  let shouldCenterItems = false;

  if (gridWidth && itemWidth) {
    const itemsPerRow = Math.floor(gridWidth / itemWidth);
    const remainingItems = itemsPerRow - (childrenCount % itemsPerRow);
    shouldCenterItems = itemsPerRow === 1;

    for (let i = 0; i < remainingItems; i++) {
      remainingElements.push(
        <div
          key={i}
          style={{ width: itemWidth, visibility: 'hidden' }}
          aria-hidden
        />,
      );
    }
  }

  return (
    <GridContext.Provider
      value={{
        gridItemClassName: classes.gridItem,
        getDragStack,
        isDraggingGlobal,
        onDragStart,
        onDragEnd,
        addNodeToNodeMap,
        removeNodeFromNodeMap,
      }}
    >
      <div
        ref={rootRef}
        className={cn(
          classes.root,
          paddingTop && classes.paddingTop,
          className,
        )}
      >
        <div
          ref={selectionDragRef}
          className={classes.selection}
          style={{ display: 'none' }}
        />
        <div className={cn(classes.dropzone, isOver && classes.isOver)}>
          <div
            className={cn(classes.grid, shouldCenterItems && classes.center)}
            ref={gridRef}
          >
            {children}
            {remainingElements}
          </div>
        </div>
      </div>
    </GridContext.Provider>
  );
};

export default Object.assign(withStyles(styles)(Grid), {
  Item: GridItem,
  DraggableItem: GridItemDraggable,
});
