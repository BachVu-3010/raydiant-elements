import * as A from '../../../application/ApplicationTypes';

// TODO: Tests.
export default function createDefaultValue(
  properties: A.PresentationProperty[],
) {
  const value: { [key: string]: any } = {};

  properties.forEach(prop => {
    if (prop.default === undefined) return;

    let propValue = prop.default;
    if (prop.type === 'number') {
      propValue = Number(propValue);
    } else if (prop.type === 'boolean') {
      propValue = Boolean(propValue);
    } else if (prop.type === 'array') {
      try {
        propValue = JSON.parse(propValue);
      } catch (err) {
        throw new Error(
          `Unable to parse default value for '${prop.name}': ${err.message}`,
        );
      }
    }

    value[prop.name] = propValue;
  });

  return value;
}
