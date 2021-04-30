import validatePresentation from './validatePresentation';

const defaultProps = () => ({
  presentation: {
    id: 'a',
    appVersionId: 'b',
    name: 'name',
    applicationThumbnailUrl: '',
    iconUrl: '',
    hasDynamicThumbnails: false,
    duration: 10,
    applicationName: 'flyers',
    applicationVariables: {
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
      stringFormat: '',
      array: [{ array2: [{ string: 'string' }] }],
    },
  },
  appVersion: {
    id: 'b',
    name: 'application',
    description: 'description',
    thumbnailUrl: 'thumb',
    iconUrl: 'icon',
    configurableDuration: true,
    presentationProperties: [
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
        options: [{ name: 'selection', value: 'selection' }],
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
        name: 'stringFormat',
        type: 'string',
        optional: true,
        constraints: {
          format: { regex: '[a-zA-Z]+', errorMessage: 'alphabet only' },
        },
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
  const { presentation, appVersion, minDuration } = defaultProps();
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors).toEqual([]);
});

test('Should return error for missing presentation name', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  delete presentation.name;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['name']);
});

test('Should return error for missing duration', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  delete presentation.duration;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['duration']);
});

test('Should return error for duration below minumum duration', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.duration = minDuration - 1;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['duration']);
});

test('Should not validate duration for dynamic duration', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  appVersion.configurableDuration = false;
  delete presentation.duration;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors).toEqual([]);
});

test('Should return error for missing required presentation property', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  delete presentation.applicationVariables.string;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['applicationVariables', 'string']);
});

test('Should not return error for missing optional presentation property', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  delete presentation.applicationVariables.text;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors).toEqual([]);
});

test('Should not return error for boolean type with falsely value', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.boolean = false;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors).toEqual([]);
});

test('Should not return error for number type with falsely value', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.number = 0;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors).toEqual([]);
});

test('Should return error for number type with value below minimum', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.number = -1;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['applicationVariables', 'number']);
});

test('Should return error for number type with value above maximum', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.number = 11;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['applicationVariables', 'number']);
});

test('Should return error for string type with value greater than maxlength', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.string = '01234567890';
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['applicationVariables', 'string']);
});

test('Should return error for string type with value does not match the format', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.stringFormat = '01234567890';
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['applicationVariables', 'stringFormat']);
  expect(errors[0].message).toEqual('alphabet only');

  presentation.applicationVariables.stringFormat = '';
  expect(
    validatePresentation(presentation, appVersion, minDuration).length,
  ).toEqual(0);
});

test('Should return error for text type with value greater than maxlength', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.text = '01234567890';
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['applicationVariables', 'text']);
});

test('Should return error for required empty array', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.array = [];
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual(['applicationVariables', 'array']);
});

test('Should not return error for optional empty array', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  presentation.applicationVariables.array[0].array2 = [];
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors).toEqual([]);
});

test('Should not return error for nested array property', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  delete presentation.applicationVariables.array[0].array2[0].string;
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors.length).toEqual(1);
  expect(errors[0].path).toEqual([
    'applicationVariables',
    'array',
    0,
    'array2',
    0,
    'string',
  ]);
});

test('Should not return error for theme application var', () => {
  const { presentation, appVersion, minDuration } = defaultProps();
  (presentation.applicationVariables as any) = {};
  appVersion.presentationProperties = [{ type: 'theme', name: 'theme' }];
  const errors = validatePresentation(presentation, appVersion, minDuration);
  expect(errors).toEqual([]);
});
