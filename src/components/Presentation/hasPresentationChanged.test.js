import hasPresentationChanged from './hasPresentationChanged';

test('Should return true for name change', () => {
  const prevPresentation = { name: 'a' };
  const nextPresentation = { name: 'b' };
  const application = {};
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, application)
  ).toEqual(true);
});

test('Should return true for duration change', () => {
  const prevPresentation = { name: 'a', duration: 1 };
  const nextPresentation = { name: 'a', duration: 2 };
  const application = {};
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, application)
  ).toEqual(true);
});

test('Should return true for deployment id change', () => {
  const prevPresentation = null;
  const nextPresentation = {
    name: 'a',
    duration: 1,
    application_deployment_id: 'a',
  };
  const application = {
    deployment_id: 'b',
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, application)
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
  const application = {
    presentation_properties: [{ name: 'string', type: 'string' }],
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, application)
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
  const application = {
    presentation_properties: [{ name: 'file', type: 'file' }],
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, application)
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
  const application = {
    presentation_properties: [{ name: 'file', type: 'file' }],
    deployment_id: 'a',
  };
  expect(
    hasPresentationChanged(prevPresentation, nextPresentation, application)
  ).toEqual(false);
});
