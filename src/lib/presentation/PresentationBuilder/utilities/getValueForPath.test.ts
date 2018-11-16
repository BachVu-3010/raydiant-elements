import getValueAtPath from './getValueAtPath';

test('Should return root value for crumb', () => {
  const value = [{ string: 'string' }];
  const crumb = [0];
  expect(getValueAtPath(value, crumb)).toEqual({ string: 'string' });
});

test('Should return nested value for crumb', () => {
  const value = [{ nestedItems: [{ string: 'string' }] }];
  const crumb = [0, 'nestedItems', 0];
  expect(getValueAtPath(value, crumb)).toEqual({ string: 'string' });
});
