import getValueAtPath from './getValueAtPath';

test('Should return root value for path', () => {
  const value = [{ string: 'string' }];
  const path = [0];
  expect(getValueAtPath(value, path)).toEqual({ string: 'string' });
});

test('Should return nested value for path', () => {
  const value = [{ nestedItems: [{ string: 'string' }] }];
  const path = [0, 'nestedItems', 0];
  expect(getValueAtPath(value, path)).toEqual({ string: 'string' });
});
