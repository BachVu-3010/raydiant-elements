import * as React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { reorder } from '../../helpers';
import * as P from '../../presentation/PresentationTypes';
import PresentationListItem from './PresentationListItem';

// Necessary for keeping track of the selected item.
// Using index to track the selected item causes issues when selecting an item, then re-ordering.
// Using presentationId will select multiple items if there are duplicate presentations in the list.
const getUniquePresentationId = (presentationId: string, index: number) => {
  return `${presentationId}-${index}`;
};

interface RenderProps<T extends P.Presentation> {
  presentation: T;
  onRemove: () => void;
  itemId: string;
}

export interface PresentationsListProps<T extends P.Presentation> {
  presentations?: T[];
  onOrderChange?: (
    presentations: string[],
    // passing the updated selected item id so that the
    // consumer can re-select the item from the list.
    updatedSelectedItemId?: string,
  ) => void;
  children?: (props: RenderProps<T>) => React.ReactNode;
}

export interface PresentationsListState {
  presentationIds: string[];
}

export class PresentationsList<
  T extends P.Presentation
> extends React.Component<PresentationsListProps<T>, PresentationsListState> {
  static defaultProps: Partial<PresentationsListProps<P.Presentation>> = {
    presentations: [],
    onOrderChange: () => {
      return;
    },
    children: () => null,
  };

  state: PresentationsListState = {
    presentationIds: this.props.presentations.map(p => p.id),
  };

  componentDidUpdate(prevProps: PresentationsListProps<T>) {
    const { presentations } = this.props;
    const didPresentationsChange =
      presentations.length !== prevProps.presentations.length ||
      presentations.some((p, i) => p.id !== prevProps.presentations[i].id);

    if (didPresentationsChange) {
      this.setState({
        presentationIds: this.props.presentations.map(p => p.id),
      });
    }
  }

  onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };

  onDragEnd = (result: DropResult) => {
    const { onOrderChange, presentations } = this.props;
    const { presentationIds } = this.state;
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const presentationIdsReOrdered = reorder(
      presentationIds,
      result.source.index,
      result.destination.index,
    );

    this.setState({ presentationIds: presentationIdsReOrdered }, () => {
      const selectedPresentationId = presentations[result.source.index].id;
      const updatedSelectedItemId = getUniquePresentationId(
        selectedPresentationId,
        result.destination.index,
      );
      onOrderChange(presentationIdsReOrdered, updatedSelectedItemId);
    });
  };

  removeItem = (idx: number) => {
    const { onOrderChange } = this.props;
    const { presentationIds } = this.state;

    const presentationIdsUpdated = [
      ...presentationIds.slice(0, idx),
      ...presentationIds.slice(idx + 1, presentationIds.length),
    ];
    this.setState({ presentationIds: presentationIdsUpdated }, () => {
      onOrderChange(presentationIdsUpdated);
    });
  };
  render() {
    const { children, presentations } = this.props;
    const { presentationIds } = this.state;

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId="droppable">
          {droppableProvided => (
            <div ref={droppableProvided.innerRef}>
              {presentationIds.map((id, i) => (
                <Draggable
                  key={getUniquePresentationId(id, i)}
                  draggableId={getUniquePresentationId(id, i)}
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
                        presentation: presentations.find(p => p.id === id),
                        itemId: getUniquePresentationId(id, i),
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

export default Object.assign(PresentationsList, {
  Item: PresentationListItem,
});
