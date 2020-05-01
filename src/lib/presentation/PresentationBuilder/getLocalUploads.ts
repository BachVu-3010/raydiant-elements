import * as A from '../../application/ApplicationTypes';
import * as P from '../PresentationTypes';

const getLocalUploadsForAppVars = (
  appVars: P.ApplicationVariables,
  properties: A.PresentationProperty[],
  fileBlobs: { [localUrl: string]: File },
  path: P.Path,
) => {
  const localUploads: P.LocalUpload[] = [];

  properties.forEach(property => {
    const value = appVars[property.name];
    if (!value) return;

    if (
      property.type === 'file' &&
      typeof value === 'object' &&
      'url' in value &&
      fileBlobs[value.url]
    ) {
      localUploads.push({
        path: [...path, property.name],
        file: fileBlobs[value.url],
        localUrl: value.url,
      });
    }

    // Recurse through array items for uploads.
    if (
      property.type === 'array' &&
      Array.isArray(value) &&
      property.properties
    ) {
      value.forEach((itemValue, index) => {
        localUploads.push(
          ...getLocalUploadsForAppVars(
            itemValue,
            property.properties,
            fileBlobs,
            [...path, property.name, index],
          ),
        );
      });
    }
  });

  return localUploads;
};

export default function getLocalUploads(
  presentation: P.Presentation,
  appVersion: A.ApplicationVersion,
  fileBlobs: { [localUrl: string]: File },
) {
  return getLocalUploadsForAppVars(
    presentation.applicationVariables,
    appVersion.presentationProperties,
    fileBlobs,
    ['applicationVariables'],
  );
}
