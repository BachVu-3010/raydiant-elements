import getPropertyAtPath from './getPropertyAtPath';

const properties = [
  {
    name: 'categoryName',
    type: 'string',
  },
  {
    name: 'items',
    type: 'array',
    properties: [
      {
        name: 'itemName',
        type: 'string',
      },
    ],
  },
];

test('Should return property for path', () => {
  expect(getPropertyAtPath(properties, ['items'])).toEqual({
    name: 'items',
    type: 'array',
    properties: [
      {
        name: 'itemName',
        type: 'string',
      },
    ],
  });
});

test('Should skip numbers in path', () => {
  expect(getPropertyAtPath(properties, [1, 'items', 2])).toEqual({
    name: 'items',
    type: 'array',
    properties: [
      {
        name: 'itemName',
        type: 'string',
      },
    ],
  });
});

test('Should return property for nested path', () => {
  expect(getPropertyAtPath(properties, ['items', 'itemName'])).toEqual({
    name: 'itemName',
    type: 'string',
  });
});
