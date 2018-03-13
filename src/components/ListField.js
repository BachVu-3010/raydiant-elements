import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import buttonReset from '../styles/buttonReset';
import Icon from './Icon';
import AlertIcon from './AlertIcon';

export class ListField extends React.Component {
  static propTypes = {
    /** Class name(s) */
    className: PropTypes.string,
    /** The value of the list field */
    value: PropTypes.arrayOf(PropTypes.any).isRequired,
    /** Optional function to render the item label, useful when list is an array of objects */
    getItemLabel: PropTypes.func,
    /** Optional function to get the key of each item, defaults to using the index */
    getItemKey: PropTypes.func,
    /** Optional function to get an error of an each item */
    getItemError: PropTypes.func,
    /** Called with the new value when items have been reordered */
    onChange: PropTypes.func.isRequired,
    /** Called when an item is clicked */
    onItemClick: PropTypes.func,
    /** Called when the user clicks the add button */
    onAdd: PropTypes.func.isRequired,
    /** Add button label */
    addLabel: PropTypes.string,
    /** Set to true to disable the add button. */
    addDisabled: PropTypes.bool,
    /** @ignore injected by withStyles */
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    className: '',
    getItemLabel: item => item,
    getItemKey: (item, index) => index,
    getItemError: () => {},
    onItemClick: null,
    addLabel: 'Add a new item',
    addDisabled: false,
  };

  state = {};

  onDragEnd = ({ source, destination }) => {
    const { value, onChange } = this.props;
    // Dropped outside the list.
    if (!destination) return;

    const reordered = [...value];
    const [removed] = reordered.splice(source.index, 1);
    reordered.splice(destination.index, 0, removed);
    onChange(reordered);
  };

  renderItem(item, index) {
    const {
      classes,
      onItemClick,
      getItemKey,
      getItemLabel,
      getItemError,
    } = this.props;
    const key = `${getItemKey(item, index)}`;
    const error = getItemError(item, index);

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
                onClick={() => onItemClick(index)}
                role="button"
                tabIndex={0}
              >
                {getItemLabel(item)}
              </div>
              {error && <AlertIcon />}
            </div>
            {placeholder}
          </div>
        )}
      </Draggable>
    );
  }

  render() {
    const {
      className,
      classes,
      value,
      addLabel,
      onAdd,
      addDisabled,
    } = this.props;

    return (
      <div className={classnames(classes.container, className)}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {({ innerRef, placeholder }) => (
              <div>
                <div ref={innerRef}>
                  {value.map((item, index) => this.renderItem(item, index))}
                </div>
                {placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          className={classnames(
            classes.add,
            addDisabled && classes.addDisabled
          )}
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

const styles = theme => ({
  container: {
    marginBottom: theme.spacing.unit * 2,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: '1px solid #c6cedc',
  },
  itemLabel: {
    ...buttonReset,
    flex: 1,
    minHeight: '1em',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit / 2,
  },
  icon: {
    height: 14,
    width: 'auto',
    padding: `0 ${theme.spacing.unit}px`,
    cursor: 'move',
  },
  add: {
    ...buttonReset,
    display: 'block',
    width: '100%',
    padding: theme.spacing.unit * 2,
  },
  addDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  addIcon: {
    display: 'block',
    margin: '0 auto',
    marginBottom: theme.spacing.unit / 2,
  },
  addLabel: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
});

export default withStyles(styles)(ListField);
