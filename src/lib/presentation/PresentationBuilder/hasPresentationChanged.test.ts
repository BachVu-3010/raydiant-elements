import * as T from '../PresentationTypes';
import hasPresentationChanged from './hasPresentationChanged';

const defaultProps = (presentation = {}, appVersion = {}) => ({
  presentation: {
    id: 'a',
    appVersionId: 'b',
    name: 'presentation',
    applicationVariables: {},
    ...presentation,
  },
  appVersion: {
    id: 'b',
    name: 'appVersion',
    presentationProperties: [] as T.PresentationProperty[],
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
