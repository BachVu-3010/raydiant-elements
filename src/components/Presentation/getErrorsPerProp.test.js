import getErrorsPerProp from './getErrorsPerProp';

test('Should get errors per prop', () => {
  const errors = [
    { path: ['a', 'b', 0] },
    { path: ['a', 'b', 0, 'c', 1] },
    { path: ['c'] },
    { path: ['d', 'e'] },
  ];
  expect(getErrorsPerProp(errors)).toEqual([
    { propPath: ['a', 'b'], errorPath: ['a', 'b', 0, 'c', 1] },
    { propPath: ['c'], errorPath: ['c'] },
    { propPath: ['d', 'e'], errorPath: ['d', 'e'] },
  ]);
});
