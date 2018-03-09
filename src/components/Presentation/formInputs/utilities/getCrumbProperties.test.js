import getCrumbProperties from './getCrumbProperties';

test('Should return root properties for root crumb', () => {
  const properties = [{ name: 'string', type: 'string ' }];
  const crumb = ['application_variables'];
  expect(getCrumbProperties(properties, crumb)).toEqual({
    properties: [{ name: 'string', type: 'string ' }],
  });
});

test('Should return nested properties for crumb', () => {
  const properties = [
    { name: 'ignoreMe' },
    { name: 'nestedItems', properties: [{ name: 'string', type: 'string ' }] },
  ];
  const crumb = ['application_variables', 'nestedItems', 0];
  expect(getCrumbProperties(properties, crumb)).toEqual({
    name: 'nestedItems',
    properties: [{ name: 'string', type: 'string ' }],
  });
});
