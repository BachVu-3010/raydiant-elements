import getCrumbsForPath from './getCrumbsForPath';

test('Returns crumbs for path with root crumb', () => {
  expect(getCrumbsForPath(['a', 'b'], ['a', 'b', 0, 'c', 1, 'd', 2])).toEqual([
    ['a', 'b'],
    ['a', 'b', 0],
    ['a', 'b', 0, 'c', 1],
    ['a', 'b', 0, 'c', 1, 'd', 2],
  ]);
});

test('Should not return crumbs for path for another root crumb', () => {
  expect(getCrumbsForPath(['e', 'f'], ['a', 'b', 0, 'c', 1, 'd', 2])).toEqual([
    ['e', 'f'],
  ]);
});
