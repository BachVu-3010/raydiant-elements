import * as React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { reorder } from '../../helpers';
import { scrollable } from '../../mixins';
import * as P from '../../presentation/PresentationTypes';
import Item from './Item';

const styles = () =>
  createStyles({
    root: {
      flex: 1,
      ...scrollable(),
    },
  });

interface RenderProps {
  presentation: P.Presentation;
  onRemove: () => void;
  itemId: string;
}

export interface PresentationsListProps extends WithStyles {
  presentations?: P.Presentation[];
  onOrderChange?: (presentations: string[]) => void;
  children?: (props: RenderProps) => React.ReactNode;
}

export interface PresentationsListState {
  presentations: P.Presentation[];
}

export class PresentationsList extends React.Component<
  PresentationsListProps,
  PresentationsListState
> {
  static defaultProps: Partial<PresentationsListProps> = {
    presentations: [],
    onOrderChange: () => {
      return;
    },
    children: () => null,
  };

  state: PresentationsListState = {
    presentations: this.props.presentations,
  };

  componentDidUpdate() {
    // Update state if a presentation is added or removed. This is a naive
    // implementation and will undo any re-ordering since component mount.
    if (this.props.presentations.length !== this.state.presentations.length) {
      this.setState({ presentations: this.props.presentations });
    }
  }

  onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };

  onDragEnd = (result: DropResult) => {
    const { onOrderChange } = this.props;
    const { presentations } = this.state;
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const presentationsReOrdered = reorder(
      presentations,
      result.source.index,
      result.destination.index,
    );
    this.setState({ presentations: presentationsReOrdered }, () => {
      onOrderChange(presentationsReOrdered.map(p => p.id));
    });
  };

  // Used to keep track of the selected item.
  // Using id to track the selected item causes issues when selecting an item, then re-ordering.
  // Using presentationId will select multiple items if there are duplicate presentations in the list.
  getUniquePresentationId = (presentationId: string, index: number) => {
    return `${presentationId}-${index}`;
  };

  removeItem = (idx: number) => {
    const { onOrderChange } = this.props;
    const { presentations } = this.state;

    const presentationsUpdated = [
      ...presentations.slice(0, idx),
      ...presentations.slice(idx + 1, presentations.length),
    ];
    this.setState({ presentations: presentationsUpdated }, () => {
      onOrderChange(presentationsUpdated.map(p => p.id));
    });
  };

  render() {
    const { classes, children } = this.props;
    const { presentations } = this.state;
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId="droppable">
          {droppableProvided => (
            <div className={classes.root} ref={droppableProvided.innerRef}>
              {presentations.map((p, i) => (
                <Draggable
                  key={this.getUniquePresentationId(p.id, i)}
                  draggableId={this.getUniquePresentationId(p.id, i)}
                  index={i}
                >
                  {draggableProvided => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      {children({
                        onRemove: () => this.removeItem(i),
                        presentation: p,
                        itemId: this.getUniquePresentationId(p.id, i),
                      })}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Object.assign(withStyles(styles)(PresentationsList), {
  Item,
});
