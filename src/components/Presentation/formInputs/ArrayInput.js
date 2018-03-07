import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import isEqualArray from 'array-equal';
import buttonReset from '../../../styles/buttonReset';
import ListField from '../../ListField';
import Breadcrumbs from '../../Breadcrumbs';
import Breadcrumb from '../../Breadcrumb';
import Popover from '../../Popover';
import PopoverAnchor from '../../PopoverAnchor';
import Button from '../../Button';
import Icon from '../../Icon';
import AlertIcon from '../../AlertIcon';
import Column from '../../Column';
import { validateAppVars } from '../validatePresentation';
import { propTypes, defaultProps } from './propTypes';
import getCrumbsForPath from './utilities/getCrumbsForPath';
import getItemLabel from './utilities/getItemLabel';
import getCrumbValue from './utilities/getCrumbValue';
import getCrumbProperties from './utilities/getCrumbProperties';

const defaultLabel = 'New';

export class ArrayInput extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    showDeletePrompt: false,
  };

  showDeletePrompt = () => {
    this.setState({ showDeletePrompt: true });
  };

  hideDeletePrompt = () => {
    this.setState({ showDeletePrompt: false });
  };

  renderDeletePrompt(value, properties, crumbs) {
    const { onRemove, setSelectedPath, classes, strings } = this.props;
    const label = getItemLabel(value, properties, defaultLabel);
    const arrayProp = properties.find(prop => prop.type === 'array');
    let message = `Delete ${label}`;

    if (
      arrayProp &&
      value[arrayProp.name] &&
      value[arrayProp.name].length > 0
    ) {
      const count = value[arrayProp.name].length;
      const arrayPropLabel = strings[arrayProp.name] || arrayProp.name;
      const arrayPropLabelSingular =
        strings[arrayProp.singular_name] || arrayProp.singular_name || 'Item';
      message = `${message} and its ${count} ${
        count === 1 ? arrayPropLabelSingular : arrayPropLabel
      }`;
    }

    return (
      <div className={classes.prompt}>
        <div className={classes.promptHeader}>
          <AlertIcon color="soft" className={classes.promptIcon} />
          {message}?
        </div>
        <div className={classes.promptBody}>
          <Button
            color="default"
            label="Cancel"
            onClick={this.hideDeletePrompt}
          />
          <Button
            color="destructive"
            label="Delete"
            onClick={() => {
              onRemove();
              // Go back to the previously selected item.
              setSelectedPath(crumbs[crumbs.length - 2]);
              this.hideDeletePrompt();
            }}
          />
        </div>
      </div>
    );
  }

  renderBreadcrumbs(crumbs) {
    const { label, value, properties, setSelectedPath } = this.props;
    const breadcrumbs = crumbs.map((crumb, index) => {
      if (index === 0) {
        // Root crumb
        return { id: index, label, onClick: () => setSelectedPath([]) };
      }

      // The value in the array that corresponds to the current crumb.
      const crumbValue = getCrumbValue(value, crumb);
      const crumbProperties = getCrumbProperties(properties, crumb);
      const crumbLabel = getItemLabel(
        crumbValue,
        crumbProperties,
        defaultLabel
      );

      return {
        id: index,
        label: crumbLabel,
        onClick: () => setSelectedPath(crumb),
      };
    });

    // If there are >= two crumbs, back will navigate to the 2nd last crumb.
    // Otherwise it will navigate to the root crumb.
    const goBackCrumb = breadcrumbs[Math.max(breadcrumbs.length - 2, 0)];

    return (
      <Breadcrumbs onBack={goBackCrumb.onClick}>
        {breadcrumbs.map(crumb => (
          <Breadcrumb
            key={crumb.id}
            label={crumb.label}
            onClick={crumb.onClick}
          />
        ))}
      </Breadcrumbs>
    );
  }

  renderContents(crumbs) {
    const {
      singularLabel,
      value = [],
      properties,
      parentProperties,
      parentValue,
      propPath,
      onChange,
      onAdd,
      setSelectedPath,
      renderAppVars,
      strings,
      classes,
    } = this.props;
    const { showDeletePrompt } = this.state;

    // We only render properties for the last crumb.
    const contentCrumb = crumbs[crumbs.length - 1];
    const contentValue = getCrumbValue(value, contentCrumb);
    const contentProperties = getCrumbProperties(properties, contentCrumb);
    // If the current property is the last crumb we render the list.
    const propIsLastCrumb = isEqualArray(propPath, contentCrumb);
    if (propIsLastCrumb) {
      // Add extra spacing to the top of the list field when there it's the only
      // property in the list. Need to account for length == 0 as well when it's the
      // root array type.
      const isOnlyInput = parentProperties.lengh <= 1;
      // Disable the add button when any properties execept for other array types
      // are not valid and there are no items in the list.
      const nonArrayProperties = parentProperties.filter(
        prop => prop.type !== 'array'
      );
      const errors = validateAppVars(parentValue, nonArrayProperties);
      const isEmpty = value.length === 0;
      const isDisabled = isEmpty && errors.length > 0;
      const isRootCrumb = parentProperties.length === 0;
      let addLabel;

      if (isRootCrumb && isEmpty) {
        addLabel = `Add your first ${singularLabel}!`;
      } else if (isRootCrumb) {
        addLabel = `Add a new ${singularLabel}`;
      } else {
        const parentItemLabel = getItemLabel(parentValue, parentProperties, '');
        addLabel = `Add a new ${singularLabel}${
          parentItemLabel ? ` to ${parentItemLabel}` : ''
        }`;
      }

      return (
        <ListField
          className={classnames(classes.list, isOnlyInput && classes.onlyList)}
          value={value}
          getItemLabel={item =>
            getItemLabel(item, contentProperties, defaultLabel)
          }
          onItemClick={index => setSelectedPath([...propPath, index])}
          onChange={onChange}
          onAdd={() => {
            onAdd();
            setSelectedPath([...propPath, value.length]);
          }}
          addLabel={addLabel}
          addDisabled={isDisabled}
        />
      );
    }

    // Add spacing to the end of the form if the last property
    // isn't an array input.
    const lastProperty = contentProperties[contentProperties.length - 1];
    const noList = lastProperty && lastProperty.type !== 'array';

    // Render the presentation properties form for the current crumb.
    return (
      <div>
        <div className={classes.actions}>
          <PopoverAnchor>
            <button className={classes.remove} onClick={this.showDeletePrompt}>
              <Icon icon="trash" />
            </button>
            <Popover
              anchor="top right"
              to="top right"
              open={showDeletePrompt}
              onOverlayClick={this.hideDeletePrompt}
            >
              {this.renderDeletePrompt(contentValue, contentProperties, crumbs)}
            </Popover>
          </PopoverAnchor>
        </div>
        <Column className={classnames(noList && classes.noList)}>
          {renderAppVars(
            contentValue,
            contentProperties,
            strings,
            contentCrumb, // The current rendering path.
            contentProperties, // The parent properties.
            contentValue // The parent value.
          )}
        </Column>
      </div>
    );
  }

  render() {
    const { selectedPath, propPath, classes, parentProperties } = this.props;
    // We only show the breadcrumb if we are currently rendering the top most crumb.
    const isRootCrumb = parentProperties.length === 0;
    // Get the crumbs for the current prop and selected path. Crumbs for the selected
    // path are only returned if they are prefixed with the prop path. If they are
    // not prefixed with the prop path that means the selected path is for a
    // another top-level array type.
    const crumbs = getCrumbsForPath(propPath, selectedPath);

    return (
      <div>
        {isRootCrumb && this.renderBreadcrumbs(crumbs)}
        <div className={classnames(isRootCrumb && classes.card)}>
          {this.renderContents(crumbs)}
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  card: {
    padding: 12,
    border: 'solid 1px #979797',
    borderRadius: 2,
    marginBottom: theme.spacing.unit * 2,
  },
  list: {
    margin: 0,
  },
  onlyList: {
    paddingTop: 24,
  },
  noList: {
    paddingBottom: 24,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  remove: {
    ...buttonReset,
    padding: '8px 12px',
  },
  prompt: {
    minWidth: 260,
  },
  promptHeader: {
    padding: theme.spacing.unit * 2,
    backgroundColor: '#fff',
    whiteSpace: 'nowrap',
  },
  promptIcon: {
    marginRight: theme.spacing.unit,
  },
  promptBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.unit * 2,
    backgroundColor: '#e8eaee',
  },
});

export default withStyles(styles)(ArrayInput);
