import getCrumbsForPath from './getCrumbsForPath';

test('Returns crumbs for path', () => {
  expect(getCrumbsForPath(['a', 'b', 0, 'c', 1, 'd', 2])).toEqual([
    ['a', 'b', 0],
    ['a', 'b', 0, 'c', 1],
    ['a', 'b', 0, 'c', 1, 'd', 2],
  ]);
});
