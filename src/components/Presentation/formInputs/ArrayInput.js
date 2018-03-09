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
const transitionTiming = 200;

export class ArrayInput extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.state = {
      showDeletePrompt: false,
      selectedPath: props.selectedPath,
    };
  }

  componentWillReceiveProps(newProps) {
    const { propPath, selectedPath } = newProps;
    const isRoot = propPath.length <= 2; // [root, thisProp]
    if (isRoot) {
      const prevPath = this.props.selectedPath;
      if (!isEqualArray(prevPath, selectedPath)) {
        let animation = 'sibling';
        if (prevPath.length < selectedPath.length) {
          animation = 'moveDownHierarchy';
        } else if (prevPath.length > selectedPath.length) {
          animation = 'moveUpHierarchy';
        }
        // Animate
        this.animateSelection({ animation, selectedPath });
        return;
      }
    }
    this.setState({ selectedPath });
  }

  componentWillUnmount() {
    this.clearAnimation();
  }

  getSingularLabel = arrayProp =>
    this.props.strings[arrayProp.singular_name] ||
    arrayProp.singular_name ||
    'Item';

  getPluralLabel = arrayProp =>
    this.props.strings[arrayProp.name] || arrayProp.name;

  showDeletePrompt = () => {
    this.setState({ showDeletePrompt: true });
  };

  hideDeletePrompt = () => {
    this.setState({ showDeletePrompt: false });
  };

  // Clear all outstanding animations; very useful on unmount.
  clearAnimation = () => {
    cancelAnimationFrame(this.raf);
    delete this.raf;
    clearTimeout(this.animationTimeout);
    delete this.animationTimeout;
  };

  // Animate a selected path change.
  animateSelection = ({ animation, selectedPath }) => {
    this.clearAnimation();
    this.setState({ animation, animationState: 'out begin' }, () => {
      this.raf = requestAnimationFrame(() => {
        this.setState({ animationState: 'out' });
        this.animationTimeout = setTimeout(() => {
          this.setState({ animationState: 'out end' });
          this.raf = requestAnimationFrame(() => {
            this.setState({ selectedPath, animationState: 'in begin' }, () => {
              this.raf = requestAnimationFrame(() => {
                this.setState({ animationState: 'in' });
                this.animationTimeout = setTimeout(() => {
                  this.setState({
                    animation: null,
                    animationState: null,
                  });
                  this.clearAnimation();
                }, transitionTiming);
              });
            });
          });
        }, transitionTiming);
      });
    });
  };

  renderDeletePrompt(value, properties, crumbs) {
    const { onRemove, setSelectedPath, classes } = this.props;
    const { selectedPath } = this.state;
    const label = getItemLabel(value, properties, defaultLabel);
    const arrayProp = properties.filter(prop => prop.type === 'array')[0];
    let message = `Delete ${label}`;

    if (
      arrayProp &&
      value[arrayProp.name] &&
      value[arrayProp.name].length > 0
    ) {
      const count = value[arrayProp.name].length;
      const arrayPropLabel = this.getPluralLabel(arrayProp);
      const arrayPropLabelSingular = this.getSingularLabel(arrayProp);
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
              onRemove(selectedPath);
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
    const { label, appVars, appProperties, setSelectedPath } = this.props;
    const breadcrumbs = crumbs.map((crumb, index) => {
      if (index === 0) {
        // Root crumb
        return { id: index, label, onClick: () => setSelectedPath([]) };
      }

      // The value in the array that corresponds to the current crumb.
      const crumbValue = getCrumbValue(appVars, crumb);
      const crumbProperties = getCrumbProperties(appProperties, crumb)
        .properties;
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
      appVars = [],
      appProperties,
      propPath,
      onChange,
      onAdd,
      setSelectedPath,
      renderAppVars,
      strings,
      classes,
    } = this.props;
    const { showDeletePrompt, selectedPath } = this.state;

    // We only render properties for the last crumb.
    const contentCrumb = crumbs[crumbs.length - 1];
    const contentValue = getCrumbValue(appVars, contentCrumb) || [];
    const contentProperties = getCrumbProperties(appProperties, contentCrumb)
      .properties;
    // If the current property is the last crumb we render the list.
    const propIsLastCrumb = isEqualArray(propPath, contentCrumb);
    if (propIsLastCrumb) {
      const parentCrumb =
        crumbs.length > 1 ? crumbs[crumbs.length - 2] : ['application_vars'];
      const parentValue = getCrumbValue(appVars, parentCrumb);
      const parentProperties = getCrumbProperties(appProperties, parentCrumb)
        .properties;

      // Add extra spacing to the top of the list field when there it's the only
      // property in the list. Need to account for length == 0 as well when it's the
      // root array type.
      const isOnlyInput = parentProperties.length <= 1;
      // Disable the add button when any properties except for other array types
      // are not valid and there are no items in the list.
      const nonArrayProperties = parentProperties.filter(
        prop => prop.type !== 'array'
      );
      const errors = validateAppVars(parentValue, nonArrayProperties);
      const isEmpty = contentValue.length === 0;
      const isDisabled = isEmpty && errors.length > 0;
      const isRootCrumb = propPath.length <= 2; // [root, thisProp];
      let addLabel;

      if (isRootCrumb && isEmpty) {
        addLabel = `Add your first ${singularLabel}!`;
      } else if (isRootCrumb) {
        addLabel = `Add a new ${singularLabel}`;
      } else {
        const parentItemLabel = getItemLabel(
          contentValue,
          contentProperties,
          ''
        );
        addLabel = `Add a new ${singularLabel}${
          parentItemLabel ? ` to ${parentItemLabel}` : ''
        }`;
      }

      return (
        <ListField
          className={classnames(classes.list, isOnlyInput && classes.onlyList)}
          value={contentValue}
          getItemLabel={item =>
            getItemLabel(item, contentProperties, defaultLabel)
          }
          onItemClick={index => setSelectedPath([...propPath, index])}
          onChange={onChange}
          onAdd={() => {
            onAdd(propPath);
            setSelectedPath([...propPath, contentValue.length]);
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
            appVars,
            appProperties,
            strings,
            contentCrumb, // The current rendering path
            { setSelectedPath, selectedPath }
          )}
        </Column>
      </div>
    );
  }

  render() {
    const {
      appProperties,
      appVars,
      onAdd,
      propPath,
      setSelectedPath,
      classes,
    } = this.props;
    const { selectedPath, animation, animationState } = this.state;
    // We only show the breadcrumb if we are currently rendering the top most crumb.
    const isRootCrumb = propPath.length <= 2;
    // Get the crumbs for the current prop and selected path. Crumbs for the selected
    // path are only returned if they are prefixed with the prop path. If they are
    // not prefixed with the prop path that means the selected path is for a
    // another top-level array type.
    const crumbs = getCrumbsForPath(propPath, selectedPath);
    // Logic to figure out the sibling type to the current selection.
    // Will be useful if/when we add an "Add [sibling]" button.
    let peerProps;
    let peerValue;
    let peerPath;
    if (crumbs.length > 1) {
      peerPath = crumbs[crumbs.length - 1].slice(0, -1);
      peerProps = getCrumbProperties(appProperties, peerPath);
      peerValue = getCrumbValue(appVars, peerPath);
    }

    if (isRootCrumb) {
      return (
        <div>
          {this.renderBreadcrumbs(crumbs)}
          <div
            className={classnames(
              classes.card,
              animationState ? 'animating' : null
            )}
          >
            <div
              className={classnames(
                classes.frame,
                classes[animation],
                animationState
              )}
            >
              {this.renderContents(crumbs)}
            </div>
          </div>
          {peerProps && (
            <button
              onClick={() => {
                onAdd(peerPath);
                setSelectedPath([...peerPath, peerValue.length]);
              }}
              className={classes.addSiblingButton}
            >
              <Icon icon="add" className={classes.addIcon} />
              <div
                className={classes.addLabel}
              >{`Add another ${this.getSingularLabel(peerProps)}`}</div>
            </button>
          )}
        </div>
      );
    }

    return <div>{this.renderContents(crumbs)}</div>;
  }
}

const styles = theme => ({
  card: {
    padding: 12,
    border: 'solid 1px #979797',
    borderRadius: 2,
    marginBottom: theme.spacing.unit * 2,
    '&.animating': {
      // Hide overflow so our translation transitions don't throw scrollbars
      // all over the place
      overflow: 'hidden',
    },
  },
  addSiblingButton: {
    ...buttonReset,
    width: '100%',
    boxSizing: 'border-box',
    padding: 12,
    border: 'solid 1px #979797',
    marginBottom: theme.spacing.unit,
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
  frame: {
    transition: `transform ease-out ${transitionTiming}ms`,
    '&.out.end, &.in.begin': {
      transition: 'none !important',
    },
  },
  moveUpHierarchy: {
    '&.in.begin': {
      transform: 'translateX(-100%)',
    },
    '&.in, &.out.begin': {
      transform: 'translateX(0) translateY(0)',
    },
    '&.out': {
      transform: 'translateX(100%)',
    },
  },
  moveDownHierarchy: {
    '&.in.begin': {
      transform: 'translateX(100%)',
    },
    '&.in, &.out.begin': {
      transform: 'translateX(0) translateY(0)',
    },
    '&.out': {
      transform: 'translateX(-100%)',
    },
  },
  sibling: {
    '&.in.begin': {
      transform: 'translateY(100%)',
    },
    '&.in, &.out.begin': {
      transform: 'translateX(0) translateY(0)',
    },
    '&.out': {
      transform: 'translateY(-100%)',
    },
  },
});

export default withStyles(styles)(ArrayInput);
