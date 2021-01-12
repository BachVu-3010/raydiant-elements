import * as A from '../../application/ApplicationTypes';
import * as P from '../PresentationTypes';
import { isPathEqual } from '../PresentationForm/utilities';

const getFileUrl = (
  fileProp: any,
  path: P.Path,
  localUploads: P.LocalUploadInProgress[],
): string => {
  const localUpload = localUploads.find(lu => isPathEqual(lu.path, path));
  if (localUpload) return localUpload.localUrl;
  return fileProp ? fileProp.url || '' : '';
};

const hasAppVarChanges = (
  properties: A.PresentationProperty[],
  prevAppVars: P.ApplicationVariables,
  nextAppVars: P.ApplicationVariables,
  localUploads: P.LocalUploadInProgress[],
  path: P.Path,
): boolean => {
  for (const prop of properties) {
    const prevAppVar = prevAppVars[prop.name];
    const nextAppVar = nextAppVars[prop.name];
    const propPath = [...path, prop.name];

    if (prop.type === 'file') {
      const prevFileUrl = getFileUrl(prevAppVar, propPath, localUploads);
      const nextFileUrl = getFileUrl(nextAppVar, propPath, localUploads);

      if (prevFileUrl !== nextFileUrl) {
        return true;
      }
    } else if (prop.type === 'array') {
      const prevArray = prevAppVar || [];
      const nextArray = nextAppVar || [];

      if (prevArray.length !== nextArray.length) {
        return true;
      }

      for (let i = 0; i < nextArray.length; i += 1) {
        if (
          hasAppVarChanges(
            prop.properties,
            prevAppVar[i],
            nextAppVar[i],
            localUploads,
            [...propPath, i],
          )
        ) {
          return true;
        }
      }
    } else if (prop.type === 'selection' && prop.multiple) {
      const prevArray = prevAppVar || [];
      const nextArray = nextAppVar || [];

      if (
        prevArray.length !== nextArray.length ||
        prevArray.some((value: any) => !nextArray.includes(value))
      ) {
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
  localUploads: P.LocalUploadInProgress[] = [],
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
    localUploads,
    ['applicationVariables'],
  );
}
