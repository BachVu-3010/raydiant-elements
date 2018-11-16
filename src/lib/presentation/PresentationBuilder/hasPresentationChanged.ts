import * as T from '../PresentationTypes';

export default function hasPresentationChanged(
  prevPres: T.Presentation,
  nextPres: T.Presentation,
  appVersion: T.AppVersion,
) {
  // Enable save when new application version is released.
  if (appVersion.id !== nextPres.appVersionId) {
    return true;
  }
  // There are no changes, no need to compare.
  if (!prevPres) {
    return false;
  }
  // Check if presentation name or duration has changed.
  if (
    prevPres.name !== nextPres.name ||
    prevPres.duration !== nextPres.duration ||
    prevPres.themeId !== nextPres.themeId
  ) {
    return true;
  }
  // Check if app vars have changed.
  // TODO: Handle array inputs (correctly does a shallow equal)
  const hasAppVarChanges = appVersion.presentationProperties.some(prop => {
    const prevAppVar = prevPres.applicationVariables[prop.name];
    const nextAppVar = nextPres.applicationVariables[prop.name];

    // For file types, check for pending uploads.
    if (prevAppVar && nextAppVar && prop.type === 'file') {
      return prevAppVar.url !== nextAppVar.url;
    }

    return prevAppVar !== nextAppVar;
  });

  return hasAppVarChanges;
}
