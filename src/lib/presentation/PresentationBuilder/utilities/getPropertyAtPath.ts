import * as A from '../../../application/ApplicationTypes';
import * as P from '../../PresentationTypes';

export default function getPropertyAtPath(
  properties: A.PresentationProperty[],
  path: P.Path,
) {
  let propertyAtPath: A.PresentationProperty;
  for (const pathPart of path) {
    if (typeof pathPart !== 'string' || !isNaN(Number(pathPart))) {
      // If pathPart is a number it's the index of an array. Skip over it to
      // get the name of the property.
      continue;
    }

    if (propertyAtPath && propertyAtPath.properties) {
      propertyAtPath = propertyAtPath.properties.find(
        prop => prop.name === pathPart,
      );
    } else {
      propertyAtPath = properties.find(prop => prop.name === pathPart);
    }
  }

  return propertyAtPath;
}
