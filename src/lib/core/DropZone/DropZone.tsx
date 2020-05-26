import * as React from 'react';
import * as cn from 'classnames';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import withStyles, { WithStyles } from '../../core/withStyles';
import { ItemTypes, DragItem } from '../DragLayer/DragItemTypes';
import styles from './DropZone.styles';

export interface DropZoneProps extends WithStyles<typeof styles> {
  onDrop?: (nodeIds: string[]) => void;
  onCanDrop?: (nodeIds: string[]) => boolean;
}

export const DropZone: React.FunctionComponent<DropZoneProps> = ({
  onDrop,
  onCanDrop = () => true,
  classes,
  children,
}) => {
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
    <div ref={dropRef} className={cn(classes.root, isOver && classes.isOver)}>
      {children}
    </div>
  );
};

export default withStyles(styles)(DropZone);
