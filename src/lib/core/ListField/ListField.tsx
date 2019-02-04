import cn from 'classnames';
import * as React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { reorder } from '../../helpers';
import AlertIcon from '../AlertIcon';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ListField.styles';

interface ListFieldProps<T> extends WithStyles<typeof styles> {
  /** The value of the list field */
  value: T[];
  /** Function to render the item label, useful when list is an array of objects */
  getItemLabel?: (item: T, index: number) => string;
  /** Function to get the key of each item, defaults to using the index */
  getItemKey?: (item: T, index: number) => string;
  /** Function to get an error for an item */
  hasItemError?: (item: T, index: number) => boolean;
  /** Called with the new value when items have been reordered */
  onChange: (value: T[]) => any;
  /** Called when an item is clicked */
  onItemClick: (item: T, index: number) => any;
  /** Called when the user clicks the add button */
  onAdd: () => any;
  /** Add button label */
  addLabel?: string;
  /** Set to true to disable the add button. */
  addDisabled?: boolean;
}

export class ListField<T = any> extends React.Component<ListFieldProps<T>, {}> {
  static defaultProps = {
    value: [] as any[],
    getItemLabel: (item: any) => item,
    getItemKey: (_: any, index: number) => `${index}`,
    hasItemError: () => false,
    addLabel: 'Add a new item',
    addDisabled: false,
  };

  onDragEnd = ({ source, destination }: DropResult) => {
    const { value, onChange } = this.props;
    // Dropped outside the list.
    if (!destination) return;

    const reordered = reorder(value, source.index, destination.index);
    onChange(reordered);
  };

  renderItem = (item: T, index: number) => {
    const {
      classes,
      onItemClick,
      getItemKey,
      getItemLabel,
      hasItemError,
    } = this.props;
    const key = `${getItemKey(item, index)}`;
    const hasError = hasItemError(item, index);

    return (
      <Draggable key={key} draggableId={key} index={index}>
        {({ innerRef, draggableProps, dragHandleProps, placeholder }) => (
          <div>
            <div
              ref={innerRef}
              {...draggableProps}
              {...dragHandleProps}
              className={classes.item}
            >
              <div
                className={classes.itemLabel}
                onClick={() => onItemClick(item, index)}
                role="button"
                tabIndex={0}
              >
                {getItemLabel(item, index)}
              </div>
              {hasError && <AlertIcon />}
            </div>
            {placeholder}
          </div>
        )}
      </Draggable>
    );
  };

  render() {
    const { value, addLabel, onAdd, addDisabled, classes } = this.props;

    return (
      <div className={classes.root}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {({ innerRef, placeholder }) => (
              <div>
                <div ref={innerRef}>{value.map(this.renderItem)}</div>
                {placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          className={cn(classes.add, addDisabled && classes.addDisabled)}
          onClick={onAdd}
          disabled={addDisabled}
        >
          <Icon icon="add" className={classes.addIcon} />
          <div className={classes.addLabel}>{addLabel}</div>
        </button>
      </div>
    );
  }
}

export default withStyles(styles)(ListField);
