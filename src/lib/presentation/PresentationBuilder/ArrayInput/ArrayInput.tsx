import * as cn from 'classnames';
import * as immutable from 'object-path-immutable';
import * as React from 'react';
import { spring, TransitionMotion } from 'react-motion';
import * as A from '../../../application/ApplicationTypes';
import Breadcrumb from '../../../core/Breadcrumb';
import Button from '../../../core/Button';
import ListField from '../../../core/ListField';
import Popover from '../../../core/Popover';
import withStyles, { WithStyles } from '../../../core/withStyles';
import FormHelperText from '../../../internal/FormHelperText';
import Column from '../../../layout/Column';
import Row from '../../../layout/Row';
import Spacer from '../../../layout/Spacer';
import * as P from '../../PresentationTypes';
import {
  createDefaultValue,
  getCrumbsFromPath,
  getItemLabel,
  getPropertyAtPath,
  getValueAtPath,
} from '../utilities';
import AddButton from './AddButton';
import styles from './ArrayInput.styles';
import RemoveButton from './RemoveButton';
import withSelectedPath from './withSelectedPath';

interface ArrayInputProps extends WithStyles<typeof styles> {
  value: P.ApplicationVariables[];
  label: string;
  path: P.Path;
  properties: A.PresentationProperty[];
  singularLabel: string;
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  strings: A.Strings;
  constraints: {
    max_items?: number;
  };
  errors: P.PresentationError[];
  addLabelTemplate?: string;
  addSiblingLabelTemplate?: string;
  defaultNewLabelTemplate?: string;
  onChange: (value: P.ApplicationVariables[]) => any;
  onBlur: () => any;
  renderForm: (
    itemValue: any,
    itemProperties: A.PresentationProperty[],
    itemPath: P.Path,
  ) => React.ReactNode;
  // Injected by withSelectedPath
  selectedPath: P.Path;
  prevSelectedPath: P.Path;
  setSelectedPath: (path: P.Path) => any;
}

interface ArrayInputState {
  showDeletePrompt: boolean;
}

class ArrayInput extends React.Component<ArrayInputProps, ArrayInputState> {
  static defaultProps = {
    value: [] as P.ApplicationVariables[],
    addLabelTemplate: 'Add a new {{label}}',
    addSiblingLabelTemplate: 'Add another {{label}}',
    defaultNewLabelTemplate: 'New ({{index}})',
  };

  state = {
    showDeletePrompt: false,
  };

  deletedItemValue: P.ApplicationVariables;
  deleteItemProperty: A.PresentationProperty;

  showDeletePrompt = () => {
    this.setState({ showDeletePrompt: true });
  };

  hideDeletePrompt = () => {
    this.setState({ showDeletePrompt: false });
  };

  getDefaultNewLabel(index: number | string) {
    const { defaultNewLabelTemplate } = this.props;
    const num = parseInt(String(index), 10) + 1;
    return defaultNewLabelTemplate.replace('{{index}}', String(num));
  }

  getSingularLabel() {
    const { addLabelTemplate, singularLabel } = this.props;
    return addLabelTemplate.replace('{{label}}', singularLabel);
  }

  getRootPath() {
    // The root path is the path to the value starting from the top-level array input.
    // props.path contains the full path to the current input from applicationVariables.
    // Remove the first two entries in the path to get the root path.
    // ie. ['applicationVariables', 'items'] => [],
    //     ['applicationVariables', 'items', 0, 'subitems'] => [0, 'subitems']
    return this.props.path.slice(2);
  }

  getPropertyAtPath(path: P.Path): A.PresentationProperty {
    const { properties, constraints } = this.props;

    // Inputs don't receive the full property object so we need to create a "fake" property
    // with the dummy type and name to appease the PresentationProperty type. We may want to
    // re-think the api to pass in the full property object to all inputs.
    const rootProperty = {
      type: 'array',
      name: 'array',
      properties,
      constraints,
    };

    return getPropertyAtPath(properties, path) || rootProperty;
  }

  hasMaxItems(value: P.ApplicationVariables[], constraints?: A.Constraints) {
    return (
      constraints !== undefined &&
      constraints.max_items !== undefined &&
      constraints.max_items <= value.length
    );
  }

  hasErrorAtIndex(index: number) {
    // Show an alert icon on the list fields item if there is an error with
    // a path that begins with the item path. Error paths contain the full path
    // so we use the full path from props with the index as the item path.
    const { path, errors } = this.props;
    const itemPath = [...path, index];
    return errors.some(error => itemPath.every((p, i) => p === error.path[i]));
  }

  getLocalSelectedPath(selectedPath: P.Path) {
    // The local selected path is the intersection of the root path and the selected path.
    // The root path and the selected path contains the full path starting from the top-most
    // array input. For a nested array input to compute it's value and properties at a given
    // path we must remove the overlay.
    // ie. rootPath = [0, 'subitems'], selectedPath = [0, 'subitems', 1] => [1]
    const rootPath = this.getRootPath();
    return selectedPath.filter((p, i) => p !== rootPath[i]);
  }

  renderBreadcrumb(selectedPath: P.Path) {
    const { value, label, setSelectedPath } = this.props;
    const crumbEls: React.ReactNode[] = [];
    const crumbs = getCrumbsFromPath(selectedPath);

    // The first crumb is always the array input label.
    crumbEls.push(
      <Breadcrumb.Crumb
        key={crumbEls.length}
        label={label}
        onClick={() => setSelectedPath([])}
      />,
    );

    crumbs.forEach(crumb => {
      const crumbLabel = getItemLabel(
        getValueAtPath(value, crumb),
        this.getPropertyAtPath(crumb).properties,
        this.getDefaultNewLabel(crumb[crumb.length - 1]),
      );

      crumbEls.push(
        <Breadcrumb.Crumb
          key={crumbEls.length}
          label={crumbLabel}
          onClick={() => setSelectedPath(crumb)}
        />,
      );
    });

    return (
      <Breadcrumb
        onBack={() =>
          // If there are >= two crumbs, back will navigate to the 2nd last crumb.
          // Otherwise it will navigate to the root crumb.
          setSelectedPath(crumbs[crumbs.length - 2] || [])
        }
      >
        {crumbEls}
      </Breadcrumb>
    );
  }

  renderItemForm(selectedPath: P.Path) {
    const { value, renderForm, disabled } = this.props;

    const crumbs = getCrumbsFromPath(selectedPath);
    // Assume if we can't find the value or property at the selected path that
    // it was just removed. This happens when transitioning after deleting the last
    // item in an array.
    const itemValue =
      getValueAtPath(value, selectedPath) || this.deletedItemValue;
    const itemProperty =
      this.getPropertyAtPath(selectedPath) || this.deleteItemProperty;

    return (
      <Column>
        <Row>
          <Spacer />
          <Popover.Anchor>
            <RemoveButton disabled={disabled} onClick={this.showDeletePrompt} />
            {this.renderDeletePrompt(
              itemValue,
              itemProperty,
              selectedPath,
              crumbs,
            )}
          </Popover.Anchor>
        </Row>
        {renderForm(itemValue, itemProperty.properties, selectedPath)}
      </Column>
    );
  }

  renderDeletePrompt(
    itemValue: P.ApplicationVariables[],
    itemProperty: A.PresentationProperty,
    selectedPath: P.Path,
    crumbs: P.Crumbs,
  ) {
    const { value, onChange, setSelectedPath } = this.props;
    const { showDeletePrompt } = this.state;

    const itemLabel = getItemLabel(
      itemValue,
      itemProperty.properties,
      this.getDefaultNewLabel(value.indexOf(itemValue)),
    );

    return (
      <Popover
        anchor={['top', 'right']}
        to={['top', 'right']}
        open={showDeletePrompt}
        width="auto"
        onOverlayClick={this.hideDeletePrompt}
      >
        <Popover.Header>Delete {itemLabel}?</Popover.Header>
        <Popover.Item>
          <Button label="Cancel" onClick={this.hideDeletePrompt} />
          <Spacer />
          <Button
            label="Delete"
            color="destructive"
            onClick={() => {
              this.hideDeletePrompt();
              this.deletedItemValue = itemValue;
              this.deleteItemProperty = itemProperty;
              // Remove current item from the array. The delete prompt
              // is rendered relative to the parent so we need to remove
              // the value at the selected path.
              onChange(immutable.del(value, selectedPath));
              // Go back to the previously selected item.
              setSelectedPath(crumbs[crumbs.length - 2] || []);
            }}
          />
        </Popover.Item>
      </Popover>
    );
  }

  renderList() {
    const {
      value,
      properties,
      constraints,
      onChange,
      setSelectedPath,
      disabled,
    } = this.props;

    return (
      <ListField
        value={value}
        getItemLabel={(item, index) =>
          getItemLabel(item, properties, this.getDefaultNewLabel(index))
        }
        hasItemError={(_, index) => this.hasErrorAtIndex(index)}
        addLabel={this.getSingularLabel()}
        addDisabled={disabled || this.hasMaxItems(value, constraints)}
        onChange={onChange}
        onAdd={() => {
          onChange([...value, createDefaultValue(properties)]);
          setSelectedPath([...this.getRootPath(), value.length]);
        }}
        onItemClick={(_, index) => {
          if (!disabled) {
            setSelectedPath([...this.getRootPath(), index]);
          }
        }}
      />
    );
  }

  renderContents(selectedPath: P.Path) {
    // An array input can have nested array inputs and thus recursively renders.
    // When a selected item has an array input it renders the item's app vars with
    // the path to the item. We know we need to render the list field when the length
    // of the root path (path to currently selected item) is greater than or equal to
    // the selected path's length.
    const shouldRenderForm = this.getRootPath().length < selectedPath.length;

    return shouldRenderForm
      ? this.renderItemForm(selectedPath)
      : this.renderList();
  }

  renderAddSibling(selectedPath: P.Path): React.ReactNode {
    const {
      value,
      setSelectedPath,
      onChange,
      singularLabel,
      addSiblingLabelTemplate,
      strings,
      disabled,
    } = this.props;
    if (!selectedPath.length) return null;

    const siblingProperty = this.getPropertyAtPath(selectedPath);
    const siblingLabel =
      strings[siblingProperty.singular_name] ||
      siblingProperty.singular_name ||
      singularLabel;

    // The selected path's last item is the index of the selected item,
    // remove it to get the path to the parent array.
    const parentValuePath = selectedPath.slice(0, -1);
    const parentValue = getValueAtPath(value, parentValuePath);

    return (
      <AddButton
        label={addSiblingLabelTemplate.replace('{{label}}', siblingLabel)}
        disabled={
          disabled || this.hasMaxItems(parentValue, siblingProperty.constraints)
        }
        onClick={() => {
          // Push a new sibling item onto the parent array value.
          onChange(
            immutable.push(
              value,
              parentValuePath,
              createDefaultValue(siblingProperty.properties),
            ),
          );

          setSelectedPath([...parentValuePath, parentValue.length]);
        }}
      />
    );
  }

  render() {
    const {
      classes,
      helperText,
      error,
      path,
      selectedPath,
      prevSelectedPath,
    } = this.props;
    const { showDeletePrompt } = this.state;
    const localSelectedPath = this.getLocalSelectedPath(selectedPath);
    const contents = this.renderContents(localSelectedPath);

    // We don't render the breadcrumbs or surrounding container
    // when rendering the contents of the selected item. The root
    // array input stores the selected path state for nested arrays
    // and handles transitioning between paths.
    const isRenderingSelectedItem = path.length > 2;
    if (isRenderingSelectedItem) {
      return contents;
    }

    // Compute animation properties from change in selected path.
    const prevLocalSelectedPath = this.getLocalSelectedPath(prevSelectedPath);
    const isSiblingAnimation =
      localSelectedPath.length === prevLocalSelectedPath.length;
    const isForwardsAnimation =
      localSelectedPath.length > prevLocalSelectedPath.length;
    const direction = isForwardsAnimation || isSiblingAnimation ? 1 : -1;

    return (
      <div className={classes.root}>
        {this.renderBreadcrumb(selectedPath)}

        <TransitionMotion
          willEnter={() =>
            isSiblingAnimation
              ? { x: 0, y: 100 * direction }
              : { x: 100 * direction, y: 0 }
          }
          willLeave={() =>
            isSiblingAnimation
              ? { x: 0, y: spring(-100 * direction) }
              : { x: spring(-100 * direction), y: 0 }
          }
          styles={[
            {
              key: localSelectedPath.join(),
              data: { contents },
              style: isSiblingAnimation
                ? { x: 0, y: spring(0) }
                : { x: spring(0), y: 0 },
            },
          ]}
        >
          {interpolatedStyles => (
            <div
              className={cn(
                classes.contents,
                !showDeletePrompt && classes.clip,
              )}
            >
              {interpolatedStyles.map(({ key, style, data }) => (
                <div
                  key={key}
                  className={
                    data.contents === contents ? '' : classes.contentsOut
                  }
                  style={{
                    transform:
                      // Remove the transform when the div isn't animating to
                      // fix relative popovers. A better fix might be to have
                      // popovers use React.portals to move to <body>.
                      style.x || style.y
                        ? `translate(${style.x}%, ${style.y}%)`
                        : '',
                  }}
                >
                  {data.contents}
                </div>
              ))}
            </div>
          )}
        </TransitionMotion>

        {this.renderAddSibling(selectedPath)}

        <FormHelperText error={error}>{helperText}</FormHelperText>
      </div>
    );
  }
}

export default withStyles(styles)(withSelectedPath(ArrayInput));
