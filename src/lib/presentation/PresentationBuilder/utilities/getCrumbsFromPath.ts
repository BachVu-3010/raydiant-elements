import * as T from '../../PresentationTypes';

// Returns the crumbs for the provided path. A crumb is the path to
// an item in an array input.
// A path of ['a', 'b', 0, 'c', 1, 'd', 2] returns
// [
//   ['a', 'b', 0], // path to value at array input b, index 0
//   ['a', 'b', 0, 'c', 1], // path to value at array input c, index 1
//   ['a', 'b', 0, 'c', 1, 'd', 2], // path to value at  array input d, index 2
// ]
export default function getCumbsForPath(path: T.Path): T.Crumbs {
  const crumbs: T.Crumbs = [];
  let crumbPath: T.Path = [];

  // Traverse the path until we find a number. A number is the index of the
  // item within an array input's value.
  path.forEach(item => {
    // When we encounter a number, it's the end of the current crumb.
    if (typeof item === 'number') {
      crumbPath.push(item);
      crumbs.push(crumbPath);
      crumbPath = [...crumbPath];
    } else {
      crumbPath.push(item);
    }
  });

  return crumbs;
}
