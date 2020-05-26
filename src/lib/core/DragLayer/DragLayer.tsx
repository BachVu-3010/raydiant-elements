import Badge from '@material-ui/core/Badge';
import * as React from 'react';
import { useDragLayer } from 'react-dnd';
import { animated, useSpring } from 'react-spring';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './DragLayer.styles';
import { DragItem, ItemTypes } from './DragItemTypes';

export interface DragLayerProps extends WithStyles<typeof styles> {
  renderDragItem: (nodeId: string, itemType: ItemTypes) => React.ReactNode;
}

export const DragLayer: React.FunctionComponent<DragLayerProps> = ({
  renderDragItem,
  classes,
}) => {
  const {
    item,
    itemType,
    clientOffset,
    sourceClientOffset,
    initialClientOffset,
    isDragging,
  } = useDragLayer(monitor => ({
    item: monitor.getItem() as DragItem,
    itemType: monitor.getItemType(),
    clientOffset: monitor.getClientOffset(),
    sourceClientOffset: monitor.getSourceClientOffset(),
    initialClientOffset: monitor.getInitialClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const dragDistance = React.useRef(0);

  React.useEffect(() => {
    if (isDragging) {
      dragDistance.current = Math.max(
        dragDistance.current,
        initialClientOffset
          ? Math.max(
              Math.abs(initialClientOffset.x - clientOffset.x),
              Math.abs(initialClientOffset.y - clientOffset.y),
            )
          : 0,
      );
    } else {
      dragDistance.current = 0;
    }
  });

  const shouldOffsetDragItems =
    initialClientOffset &&
    dragDistance.current > 15 &&
    item &&
    item.boundingRect;

  const pointerOffsetY = shouldOffsetDragItems
    ? initialClientOffset.y -
      item.boundingRect.y +
      (item.stack.length > 1 ? 24 : 12)
    : 0;

  const pointerOffsetX = shouldOffsetDragItems
    ? initialClientOffset.x - item.boundingRect.x + 12
    : 0;

  const props = useSpring({
    transform: `translate(${pointerOffsetX}px, ${pointerOffsetY}px)`,
    from: { transform: `translate(0px, 0px)` },
  });

  if (
    !isDragging ||
    !sourceClientOffset ||
    !Object.values(ItemTypes).includes(itemType as ItemTypes)
  ) {
    return null;
  }

  return (
    <div className={classes.root}>
      {item.stack.length > 1 && (
        <div
          style={{
            position: 'absolute',
            top: clientOffset.y + 12,
            left: clientOffset.x + 12,
          }}
        >
          <Badge color="primary" badgeContent={item.stack.length}>
            <div />
          </Badge>
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          top: sourceClientOffset.y,
          left: sourceClientOffset.x,
        }}
      >
        <animated.div style={props}>
          {item.stack.slice(0, 3).map((nodeId, i) => {
            return (
              <div
                key={nodeId}
                style={{
                  position: 'absolute',
                  top: i * 5,
                  left: i * -5,
                  zIndex: item.stack.length - i,
                  width: item.boundingRect.width,
                  height: item.boundingRect.height,
                }}
              >
                {renderDragItem(nodeId, itemType as ItemTypes)}
              </div>
            );
          })}
        </animated.div>
      </div>
    </div>
  );
};

export default withStyles(styles)(DragLayer);
