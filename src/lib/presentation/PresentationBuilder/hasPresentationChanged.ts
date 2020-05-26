import * as A from '../../application/ApplicationTypes';
import * as P from '../PresentationTypes';

const hasAppVarChanges = (
  properties: A.PresentationProperty[],
  prevAppVars: P.ApplicationVariables,
  nextAppVars: P.ApplicationVariables,
): boolean => {
  for (const prop of properties) {
    const prevAppVar = prevAppVars[prop.name];
    const nextAppVar = nextAppVars[prop.name];

    if (prop.type === 'file') {
      const prevFile = prevAppVar || { url: '' };
      const nextFile = nextAppVar || { url: '' };

      if (prevFile.url !== nextFile.url) {
        return true;
      }
    } else if (prop.type === 'array') {
      const prevArray = prevAppVar || [];
      const nextArray = nextAppVar || [];

      if (prevArray.length !== nextArray.length) {
        return true;
      }

      for (let i = 0; i < nextArray.length; i += 1) {
        if (hasAppVarChanges(prop.properties, prevAppVar[i], nextAppVar[i])) {
          return true;
        }
      }
    } else if (prop.type === 'selection' && prop.multiple) {
      const prevArray = prevAppVar || [];
      const nextArray = nextAppVar || [];

      if (prevArray.length !== nextArray.length) {
        return true;
      }
    } else if (prevAppVar !== nextAppVar) {
      return true;
    }
  }
  return false;
};

export default function hasPresentationChanged(
  prevPres: P.Presentation,
  nextPres: P.Presentation,
  appVersion: A.ApplicationVersion,
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
  return hasAppVarChanges(
    appVersion.presentationProperties,
    prevPres.applicationVariables,
    nextPres.applicationVariables,
  );
}
