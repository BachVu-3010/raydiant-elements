import React from 'react';
import isEqualArray from 'array-equal';
import { withStyles } from 'material-ui/styles';
import ListField from '../../ListField';
import Button from '../../Button';
import { propTypes, defaultProps } from './propTypes';
import getCrumbsForPath from './getCrumbsForPath';
import getItemLabel from './getItemLabel';

export const ArrayInput = ({
  propPath,
  selectedPath,
  properties,
  strings,
  label,
  value = [],
  helperText,
  hasError,
  onChange,
  onAdd,
  onRemove,
  setSelectedPath,
  renderAppVars,
  classes,
}) => {
  // Use the first property's value as the label.
  const itemLabelProp = properties[0];
  // Get the crumbs for the selected path.
  const crumbs = getCrumbsForPath(selectedPath);
  // The crumb for the property path. The last item is the selected index,
  // so we compare the crumb minus the selected index to the property path.
  const crumbForProp = crumbs.find(crumb =>
    isEqualArray(crumb.slice(0, crumb.length - 1), propPath)
  );
  const indexOfCrumb = crumbs.indexOf(crumbForProp);
  const previousCrumb = crumbs[indexOfCrumb - 1];
  const nextCrumb = crumbs[indexOfCrumb + 1];

  // A list field with no children will display it's items with the ability
  // to reorder them. If children is provided then children are rendered
  // instead of the items.
  let children;
  if (crumbForProp) {
    const selectedItemIndex = crumbForProp[crumbForProp.length - 1];
    const selectedItem = value[selectedItemIndex];
    const selectedItemLabel = getItemLabel(selectedItem, itemLabelProp);

    if (nextCrumb) {
      // The current crumb is a parent crumb and should be collapsed.
      // To collapse the array input we only render the next crumb's prop.
      const childPropName = nextCrumb[nextCrumb.length - 2];
      const childProp = properties.find(prop => prop.name === childPropName);
      // Override the label of the crumb with the selected item's label.
      const childStrings = {
        ...strings,
        [childPropName]: selectedItemLabel,
      };
      // Render the breadcrumb as a collapsed list input.
      children = renderAppVars(
        selectedItem,
        [childProp],
        childStrings,
        crumbForProp
      );
    } else {
      // Render the form for the selected item when it's the last crumb
      // in the path.
      children = (
        <div className={classes.form}>
          {renderAppVars(selectedItem, properties, strings, crumbForProp)}
          <Button
            color="destructive"
            fullWidth
            onClick={() => {
              onRemove();
              setSelectedPath(propPath);
            }}
          >
            Delete {selectedItemLabel}
          </Button>
        </div>
      );
    }
  }

  return (
    <ListField
      label={label}
      value={value}
      error={hasError}
      helperText={helperText}
      getItemLabel={item => getItemLabel(item, itemLabelProp)}
      onItemClick={index => setSelectedPath([...propPath, index])}
      onLabelClick={() => {
        if (indexOfCrumb === 0) {
          setSelectedPath([]);
        } else if (previousCrumb) {
          setSelectedPath(previousCrumb);
        }
      }}
      onAdd={() => {
        onAdd();
        setSelectedPath([...propPath, value.length]);
      }}
      onChange={onChange}
    >
      {children}
    </ListField>
  );
};

ArrayInput.propTypes = propTypes;
ArrayInput.defaultProps = defaultProps;

const styles = theme => ({
  form: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(ArrayInput);
