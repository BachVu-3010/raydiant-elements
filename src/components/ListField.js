import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Button from './Button';
import Icon from './Icon';
import { HelperText } from './Typography';

export class ListField extends React.Component {
  static propTypes = {
    /** Class name(s) */
    className: PropTypes.string,
    /** The label of the list field */
    label: PropTypes.node.isRequired,
    /** The value of the list field */
    value: PropTypes.arrayOf(PropTypes.any).isRequired,
    /** Set the true to display helper text as an error message */
    error: PropTypes.bool,
    /** Additional information to help the user fill the field */
    helperText: PropTypes.string,
    /** Optional function to render the item label, useful when list is an array of objects */
    getItemLabel: PropTypes.func,
    /** Optional function to get the key of each item, defaults to using the index */
    getItemKey: PropTypes.func,
    /** Called when adding a new item */
    onAdd: PropTypes.func.isRequired,
    /** Called with the new value when items have been reordered */
    onChange: PropTypes.func.isRequired,
    /** Called when an item is clicked */
    onItemClick: PropTypes.func.isRequired,
    /** Called when the label is clicked */
    onLabelClick: PropTypes.func,
    /** Optional children to render instead of the list */
    children: PropTypes.node,
    /** @ignore injected by withStyles */
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    className: '',
    error: false,
    helperText: '',
    getItemLabel: item => item,
    getItemKey: (item, index) => index,
    onItemClick: () => {},
    onLabelClick: () => {},
    children: null,
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

  renderListItem(item, index) {
    const { classes, onItemClick, getItemKey, getItemLabel } = this.props;
    const key = `${getItemKey(item, index)}`;
    return (
      <Draggable key={key} draggableId={key} index={index}>
        {({ innerRef, draggableProps, dragHandleProps, placeholder }) => (
          <div>
            <div ref={innerRef} className={classes.item} {...draggableProps}>
              <div {...dragHandleProps}>
                <Icon className={classes.icon} icon="dragVertical" />
              </div>
              <div
                className={classes.itemLabel}
                role="button"
                tabIndex={0}
                onClick={() => onItemClick(index)}
              >
                {getItemLabel(item)}
              </div>
            </div>
            {placeholder}
          </div>
        )}
      </Draggable>
    );
  }

  renderChildren() {
    const { classes, children } = this.props;
    return <div className={classes.children}>{children}</div>;
  }

  renderList() {
    const { value } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {({ innerRef, placeholder }) => (
            <div>
              <div ref={innerRef}>
                {value.map((item, index) => this.renderListItem(item, index))}
              </div>
              {placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  render() {
    const {
      className,
      label,
      error,
      helperText,
      onAdd,
      onLabelClick,
      classes,
      children,
    } = this.props;

    const showList = !children;
    const showHelperText = showList && helperText;

    return (
      <div className={classnames(classes.container, className)}>
        <div className={classnames(classes.header, showList && classes.open)}>
          <div
            className={classes.label}
            role="button"
            tabIndex={-1}
            onClick={onLabelClick}
          >
            {label}
          </div>
          {showList && <Button icon="add" onClick={onAdd} />}
        </div>
        {showList ? this.renderList() : this.renderChildren()}
        {showHelperText && (
          <HelperText className={classes.helperText} error={error}>
            {helperText}
          </HelperText>
        )}
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    marginBottom: theme.spacing.unit * 2,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #c6cedc',
  },
  open: {
    borderBottom: 'none',
  },
  label: {
    flex: 1,
    minHeight: '1em',
    padding: `${theme.spacing.unit / 2}px 0`,
    color: theme.palette.input.labelText,
    cursor: 'pointer',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: '1px solid #c6cedc',
  },
  itemLabel: {
    flex: 1,
    minHeight: '1em',
    padding: `${theme.spacing.unit / 2}px 0`,
    cursor: 'pointer',
  },
  icon: {
    height: 14,
    width: 'auto',
    padding: `0 ${theme.spacing.unit}px`,
    cursor: 'move',
  },
  children: {
    marginBottom: theme.spacing.unit * 2,
  },
  helperText: {
    marginTop: theme.spacing.unit,
  },
});

export default withStyles(styles)(ListField);
