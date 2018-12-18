import * as A from '../../../application/ApplicationTypes';
import * as P from '../../PresentationTypes';

// Returns the presentation property of an array input type for
// the path of the selected item.
export default function getPropertyAtPath(
  rootProperty: A.PresentationProperty,
  path: P.Path,
): A.PresentationProperty {
  // The selected item's index is irrelevant, remove numbers from the path.
  const propertyPath = path.filter(p => typeof p === 'string');
  // console.log(property, propertyPath);

  let propertyAtPath = rootProperty;
  // Traverse the property path, drilling into nested item properties.
  propertyPath.forEach(propertyName => {
    // Find the selected property in the array input's item properties.
    const property = propertyAtPath.properties.find(
      p => p.name === propertyName,
    );
    if (!property) {
      throw new Error(`Could not find property for path [${path.join(', ')}]`);
    }
    if (!property.properties) {
      throw new Error(
        `Property is not an array type at path [${path.join(', ')}]`,
      );
    }

    propertyAtPath = property;
  });

  return propertyAtPath;
}
