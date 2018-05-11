import hasPresentationChanged from './hasPresentationChanged';

test('Should return true for name change', () => {
  const prevPresentation = { name: 'a' };
  const nextPresentation = { name: 'b' };
  const appVersion = {};
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, appVersion)
  ).toEqual(true);
});

test('Should return true for duration change', () => {
  const prevPresentation = { name: 'a', duration: 1 };
  const nextPresentation = { name: 'a', duration: 2 };
  const appVersion = {};
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, appVersion)
  ).toEqual(true);
});

test('Should return true for theme_id change', () => {
  const prevPresentation = { name: 'a', theme_id: 1 };
  const nextPresentation = { name: 'a', theme_id: 2 };
  const appVersion = {};
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, appVersion)
  ).toEqual(true);
});

test('Should return true for deployment id change', () => {
  const prevPresentation = null;
  const nextPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
  };
  const appVersion = {
    id: 'b',
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, appVersion)
  ).toEqual(true);
});

test('Should return true for app var change', () => {
  const prevPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
    application_vars: {
      string: 'a',
    },
  };
  const nextPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
    application_vars: {
      string: 'b',
    },
  };
  const appVersion = {
    presentation_properties: [{ name: 'string', type: 'string' }],
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, appVersion)
  ).toEqual(true);
});

test('Should return true for file app var change', () => {
  const prevPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
    application_vars: {
      file: { url: 'a' },
    },
  };
  const nextPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
    application_vars: {
      file: { url: 'b' },
    },
  };
  const appVersion = {
    presentation_properties: [{ name: 'file', type: 'file' }],
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, appVersion)
  ).toEqual(true);
});

test('Should return false equal file prop', () => {
  const prevPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
    application_vars: {
      file: { url: 'a' },
    },
  };
  const nextPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
    application_vars: {
      file: { url: 'a' },
    },
  };
  const appVersion = {
    presentation_properties: [{ name: 'file', type: 'file' }],
    id: 'a',
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, appVersion)
  ).toEqual(false);
});
