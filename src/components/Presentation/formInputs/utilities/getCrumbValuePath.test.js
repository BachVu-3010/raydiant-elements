import getCrumbValuePath from './getCrumbValuePath';

test('Should return root value path from crumb', () => {
  const crumb = ['application_variables', 'items', 0];
  expect(getCrumbValuePath(crumb)).toEqual([0]);
});

test('Should return nested value path from crumb', () => {
  const crumb = ['application_variables', 'items', 0, 'nestedItems', 0];
  expect(getCrumbValuePath(crumb)).toEqual([0, 'nestedItems', 0]);
});
