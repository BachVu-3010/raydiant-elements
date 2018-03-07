import getCrumbProperties from './getCrumbProperties';

test('Should return root properties for crumb', () => {
  const properties = [{ name: 'string', type: 'string ' }];
  const crumb = ['application_variables', 'items', 0];
  expect(getCrumbProperties(properties, crumb)).toEqual([
    { name: 'string', type: 'string ' },
  ]);
});

test('Should return nested properties for crumb', () => {
  const properties = [
    { name: 'nestedItems', properties: [{ name: 'string', type: 'string ' }] },
  ];
  const crumb = ['application_variables', 'items', 0, 'nestedItems', 0];
  expect(getCrumbProperties(properties, crumb)).toEqual([
    { name: 'string', type: 'string ' },
  ]);
});
