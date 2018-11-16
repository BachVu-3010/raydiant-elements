import getPropertyAtPath from './getPropertyAtPath';

const property = {
  type: 'array',
  name: 'array',
  properties: [
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
  ],
};

test('Should return property for empty path', () => {
  expect(getPropertyAtPath(property, [])).toEqual(property);
});

test('Should return property for path at depth 1', () => {
  expect(getPropertyAtPath(property, [0])).toEqual(property);
});

test('Should return nested property for path', () => {
  expect(getPropertyAtPath(property, [1, 'items', 2])).toEqual({
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
