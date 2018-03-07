// Returns the crumbs for a path. Strings in a path represent
// property names and numbers are the selected index at the
// property. Crumbs that paths to each property and it's
// selected index.
// A path of ['a', 'b', 0, 'c', 1, 'd', 2] returns
// [
//   ['a', 'b', 0],
//   ['a', 'b', 0, 'c', 1],
//   ['a', 'b', 0, 'c', 1, 'd', 2],
// ]
export default (rootCrumb, path) => {
  const crumbs = [rootCrumb];
  let currentCrumb = [];
  // Crumbs are only added from the path if the path is prefixed
  // with the provided root crumb.
  const isPathForRootCrumb = rootCrumb.every((p, index) => p === path[index]);
  if (!isPathForRootCrumb) return crumbs;

  path.forEach(item => {
    if (typeof item === 'number') {
      currentCrumb.push(item);
      crumbs.push(currentCrumb);
      currentCrumb = [...currentCrumb];
    } else {
      currentCrumb.push(item);
    }
  });

  return crumbs;
};
