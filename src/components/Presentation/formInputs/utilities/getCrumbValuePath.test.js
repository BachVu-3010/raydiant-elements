import getCrumbValuePath from './getCrumbValuePath';

test('Should return root value path from crumb', () => {
  const crumb = ['application_variables'];
  expect(getCrumbValuePath(crumb)).toEqual([]);
});

test('Should return nested value path from crumb', () => {
  const crumb = ['application_variables', 'items', 1, 'nestedItems', 0];
  expect(getCrumbValuePath(crumb)).toEqual(['items', 1, 'nestedItems', 0]);
});
