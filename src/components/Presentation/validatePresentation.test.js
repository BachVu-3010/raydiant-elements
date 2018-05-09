import validatePresentation from './validatePresentation';

const defaultProps = () => ({
  presentation: {
    name: 'name',
    duration: 10,
    application_vars: {
      boolean: true,
      number: 4,
      text: 'text',
      selection: 'selection',
      file: {
        filename: 'filename',
        url: 'url',
      },
      datetime: '2020-02-02',
      string: 'string',
      array: [{ array2: [{ string: 'string' }] }],
    },
  },
  application: {
    name: 'application',
    thumbnail_url: 'thumb',
    icon_url: 'icon',
    configurable_duration: true,
    presentation_properties: [
      { name: 'boolean', type: 'boolean' },
      { name: 'number', type: 'number', constraints: { min: 0, max: 10 } },
      {
        name: 'text',
        type: 'text',
        optional: true,
        constraints: { maxlength: 10 },
      },
      {
        name: 'selection',
        type: 'selection',
        options: [{ label: 'selection', value: 'selection' }],
      },
      {
        name: 'file',
        type: 'file',
        constraints: { 'content-types': ['accept1', 'accept2'] },
      },
      { name: 'datetime', type: 'datetime' },
      {
        name: 'string',
        type: 'string',
        constraints: { maxlength: 10 },
      },
      {
        name: 'array',
        type: 'array',
        properties: [
          {
            name: 'array2',
            type: 'array',
            optional: true,
            properties: [{ name: 'string', type: 'string' }],
          },
        ],
      },
    ],
    strings: {},
  },
  minDuration: 10,
});

test('Should not return errors for valid presentation', () => {
  const { presentation, application, minDuration } = defaultProps();
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});

test('Should return error for missing presentation name', () => {
  const { presentation, application, minDuration } = defaultProps();
  delete presentation.name;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['name']);
});

test('Should return error for missing duration', () => {
  const { presentation, application, minDuration } = defaultProps();
  delete presentation.duration;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['duration']);
});

test('Should return error for duration below minumum duration', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.duration = minDuration - 1;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['duration']);
});

test('Should not validate duration for dynamic duration', () => {
  const { presentation, application, minDuration } = defaultProps();
  application.configurable_duration = false;
  delete presentation.duration;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});

test('Should return error for missing required presentation property', () => {
  const { presentation, application, minDuration } = defaultProps();
  delete presentation.application_vars.string;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['application_vars', 'string']);
});

test('Should not return error for missing optional presentation property', () => {
  const { presentation, application, minDuration } = defaultProps();
  delete presentation.application_vars.text;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});

test('Should not return error for link type', () => {
  const { presentation, application, minDuration } = defaultProps();
  delete presentation.application_vars.link;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});

test('Should not return error for boolean type with falsely value', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.boolean = false;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});

test('Should not return error for number type with falsely value', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.number = 0;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});

test('Should return error for number type with value below minimum', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.number = -1;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['application_vars', 'number']);
});

test('Should return error for number type with value above maximum', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.number = 11;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['application_vars', 'number']);
});

test('Should return error for string type with value greater than maxlength', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.string = '01234567890';
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['application_vars', 'string']);
});

test('Should return error for text type with value greater than maxlength', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.text = '01234567890';
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['application_vars', 'text']);
});

test('Should return error for required empty array', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.array = [];
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['application_vars', 'array']);
});

test('Should not return error for optional empty array', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars.array[0].array2 = [];
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});

test('Should not return error for nested array property', () => {
  const { presentation, application, minDuration } = defaultProps();
  delete presentation.application_vars.array[0].array2[0].string;
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual([
    'application_vars',
    'array',
    0,
    'array2',
    0,
    'string',
  ]);
});

test('Should not return error for theme application var', () => {
  const { presentation, application, minDuration } = defaultProps();
  presentation.application_vars = {};
  application.presentation_properties = [{ type: 'theme', name: 'theme' }];
  const errors = validatePresentation(presentation, application, minDuration);
  expect(errors).toEqual([]);
});
