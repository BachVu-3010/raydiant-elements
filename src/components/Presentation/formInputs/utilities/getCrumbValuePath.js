// The crumb's path includes the full path to the value from the presentation.
// To find the path to the crumbs value from the property's value we need to
// remove them first two items from the path.
//  ie. ['application_variables', 'categories', 0] -> [0]
export default crumb => crumb.slice(2, crumb.length);
