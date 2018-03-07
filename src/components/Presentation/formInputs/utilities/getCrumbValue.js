import objectPath from 'object-path';
import getCrumbValuePath from './getCrumbValuePath';

// Gets the crumbs value from the property's value.
export default (value, crumb) =>
  objectPath.get(value, getCrumbValuePath(crumb));
