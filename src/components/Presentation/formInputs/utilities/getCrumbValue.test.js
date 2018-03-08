import getCrumbValue from './getCrumbValue';

test('Should return root value for crumb', () => {
  const value = [{ string: 'string' }];
  const crumb = ['application_variables', 'items', 0];
  expect(getCrumbValue(value, crumb)).toEqual({ string: 'string' });
});

test('Should return nested value for crumb', () => {
  const value = [{ nestedItems: [{ string: 'string' }] }];
  const crumb = ['application_variables', 'items', 0, 'nestedItems', 0];
  expect(getCrumbValue(value, crumb)).toEqual({ string: 'string' });
});