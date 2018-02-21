import getItemLabel from './getItemLabel';

test('Returns non empty string for label', () => {
  const prop = { name: 'value', type: 'string' };
  expect(getItemLabel({ value: '' }, prop)).toBe(' ');
  expect(getItemLabel({ value: null }, prop)).toBe(' ');
  expect(getItemLabel({ value: undefined }, prop)).toBe(' ');
});

test('Returns string for array', () => {
  const prop = { name: 'value', type: 'array' };
  expect(getItemLabel({ value: ['a', 'b'] }, prop)).toBe('a, b');
});

test('Returns string for number', () => {
  const prop = { name: 'value', type: 'number' };
  expect(getItemLabel({ value: 1 }, prop)).toBe('1');
});

test('Returns string for boolean', () => {
  const prop = { name: 'value', type: 'number' };
  expect(getItemLabel({ value: true }, prop)).toBe('true');
});
