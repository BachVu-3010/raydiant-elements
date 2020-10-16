import * as A from '../../application/ApplicationTypes';
import hasPresentationChanged from './hasPresentationChanged';

const defaultProps = (presentation = {}, appVersion = {}) => ({
  presentation: {
    id: 'a',
    appVersionId: 'b',
    name: 'presentation',
    applicationThumbnailUrl: '',
    iconUrl: '',
    hasDynamicThumbnails: false,
    applicationVariables: {},
    applicationName: 'flyers',
    ...presentation,
  },
  appVersion: {
    id: 'b',
    name: 'appVersion',
    presentationProperties: [] as A.PresentationProperty[],
    strings: {},
    ...appVersion,
  },
});

test('Should return true for name change', () => {
  const { presentation, appVersion } = defaultProps();

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, name: 'changed' },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return true for duration change', () => {
  const { presentation, appVersion } = defaultProps();

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, duration: 2 },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return true for theme_id change', () => {
  const { presentation, appVersion } = defaultProps();

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, themeId: 'changed' },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return true for app version id change', () => {
  const { presentation, appVersion } = defaultProps();

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, appVersionId: 'changed' },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return true for app var change', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { string: 'a' } },
    { presentationProperties: [{ name: 'string', type: 'string' }] },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { string: 'b' } },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return true for file app var change', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { file: { url: 'a' } } },
    { presentationProperties: [{ name: 'file', type: 'file' }] },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { file: { url: 'b' } } },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return false equal file prop', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { file: { url: 'a' } } },
    { presentationProperties: [{ name: 'file', type: 'file' }] },
  );

  expect(
    hasPresentationChanged(presentation, { ...presentation }, appVersion),
  ).toEqual(false);
});

test('Should return true for array app var change', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { array: [{ string: 'a' }] } },
    {
      presentationProperties: [
        {
          name: 'array',
          type: 'array',
          properties: [{ name: 'string', type: 'string' }],
        },
      ],
    },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { array: [{ string: 'b' }] } },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return false for equal array', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { array: [{ string: 'a' }] } },
    {
      presentationProperties: [
        {
          name: 'array',
          type: 'array',
          properties: [{ name: 'string', type: 'string' }],
        },
      ],
    },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { array: [{ string: 'a' }] } },
      appVersion,
    ),
  ).toEqual(false);
});

test('Should return true for multi select change', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { selection: [] } },
    {
      presentationProperties: [
        {
          name: 'selection',
          type: 'selection',
          multiple: true,
        },
      ],
    },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { selection: ['a'] } },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return true for multi select change with same selected items length', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { selection: ['a', 'b'] } },
    {
      presentationProperties: [
        {
          name: 'selection',
          type: 'selection',
          multiple: true,
        },
      ],
    },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { selection: ['a', 'c'] } },
      appVersion,
    ),
  ).toEqual(true);
});

test('Should return false for equal multi select', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { selection: ['a'] } },
    {
      presentationProperties: [
        {
          name: 'selection',
          type: 'selection',
          multiple: true,
        },
      ],
    },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { selection: ['a'] } },
      appVersion,
    ),
  ).toEqual(false);
});

test('Should return false for equal multi select by ignoring order', () => {
  const { presentation, appVersion } = defaultProps(
    { applicationVariables: { selection: ['a', 'b'] } },
    {
      presentationProperties: [
        {
          name: 'selection',
          type: 'selection',
          multiple: true,
        },
      ],
    },
  );

  expect(
    hasPresentationChanged(
      presentation,
      { ...presentation, applicationVariables: { selection: ['b', 'a'] } },
      appVersion,
    ),
  ).toEqual(false);
});
