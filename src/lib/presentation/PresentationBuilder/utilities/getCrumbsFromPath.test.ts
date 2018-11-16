import getCrumbsFromPath from './getCrumbsFromPath';

test('Returns crumbs for path', () => {
  expect(getCrumbsFromPath(['a', 'b', 0, 'c', 1, 'd', 2])).toEqual([
    ['a', 'b', 0],
    ['a', 'b', 0, 'c', 1],
    ['a', 'b', 0, 'c', 1, 'd', 2],
  ]);
});

test('Returns empty crumbs for empty path', () => {
  expect(getCrumbsFromPath([])).toEqual([]);
});
