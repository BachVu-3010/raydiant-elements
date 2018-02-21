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
export default path => {
  const crumbs = [];
  let currentCrumb = [];

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
