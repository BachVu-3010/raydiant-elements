import getItemLabel from './getItemLabel';

const defaultLabel = 'default';

test('Returns default for empty label', () => {
  const properties = [{ name: 'value', type: 'string' }];
  expect(getItemLabel({ value: '' }, properties, defaultLabel)).toBe(
    defaultLabel,
  );
  expect(getItemLabel({ value: null }, properties, defaultLabel)).toBe(
    defaultLabel,
  );
  expect(getItemLabel({ value: undefined }, properties, defaultLabel)).toBe(
    defaultLabel,
  );
});

test('Returns string for array', () => {
  const properties = [{ name: 'value', type: 'array' }];
  expect(getItemLabel({ value: ['a', 'b'] }, properties, defaultLabel)).toBe(
    'a, b',
  );
});

test('Returns string for number', () => {
  const properties = [{ name: 'value', type: 'number' }];
  expect(getItemLabel({ value: 1 }, properties, defaultLabel)).toBe('1');
});

test('Returns string for boolean', () => {
  const properties = [{ name: 'value', type: 'number' }];
  expect(getItemLabel({ value: true }, properties, defaultLabel)).toBe('true');
});
