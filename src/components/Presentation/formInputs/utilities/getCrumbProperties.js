import getCrumbValuePath from './getCrumbValuePath';

// Returns the properties for a crumb by finding the properties at a given path.
export default (properties, crumb) => {
  const valuePath = getCrumbValuePath(crumb);
  // Remove any numbers (selected indexes) from the crumb's value path to get
  // its properties path.
  const propPath = valuePath.filter(path => typeof path === 'string');
  let crumbProperties = { properties };
  // Finds the crumbs properties in a potentially nested properties list.
  propPath.forEach(path => {
    if (crumbProperties.properties) {
      crumbProperties = crumbProperties.properties.filter(
        prop => prop.name === path
      )[0];
    }
  });
  return crumbProperties || [];
};
