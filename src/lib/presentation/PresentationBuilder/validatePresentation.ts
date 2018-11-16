import * as T from '../PresentationTypes';

function validate(
  appVars: T.ApplicationVariables,
  properties: T.PresentationProperty[],
  errors: T.PresentationError[],
  path: T.Path,
) {
  properties.forEach(prop => {
    const value = appVars[prop.name];
    const constraints = prop.constraints || {};
    const isRequired = !prop.optional && prop.type !== 'theme';
    // A value is set if it's truthy, false or 0 or has a length.
    const hasValue = Array.isArray(value)
      ? value.length > 0
      : value || value === false || value === 0;

    if (isRequired && !hasValue) {
      const isListFieldError = path.length > 2;

      errors.push({
        path: [...path, prop.name],
        message: isListFieldError
          ? 'Oops! Empty fields aren’t allowed, please fill or delete this item.'
          : 'Oops! Please enter required field.',
      });
    }

    if (prop.type === 'number' && hasValue) {
      if (constraints.min !== undefined && value < constraints.min) {
        errors.push({
          path: [...path, prop.name],
          message: `Oops! Please enter a value greater than ${
            constraints.min
          }.`,
        });
      }

      if (constraints.max !== undefined && value > constraints.max) {
        errors.push({
          path: [...path, prop.name],
          message: `Oops! Please enter a value less than ${constraints.max}.`,
        });
      }
    }

    if ((prop.type === 'string' || prop.type === 'text') && hasValue) {
      if (
        constraints.maxlength !== undefined &&
        value.length > constraints.maxlength
      ) {
        errors.push({
          path: [...path, prop.name],
          message: `Oops! Please enter a value less than ${
            constraints.maxlength
          }`,
        });
      }
    }

    if (prop.type === 'array' && hasValue) {
      // Recursively validate each item in the array.
      (value as any[]).forEach((itemValue, index) => {
        validate(itemValue, prop.properties, errors, [
          ...path,
          prop.name,
          index,
        ]);
      });
    }
  });
}

export default function validatePresentation(
  presentation: T.Presentation,
  appVersion: T.AppVersion,
  minDuration: number,
) {
  const errors: T.PresentationError[] = [];

  // Validate name.
  validate(presentation, [{ name: 'name', type: 'string' }], errors, []);

  // Only validate duration for configurable duration apps.
  if (appVersion.hasConfigurableDuration) {
    validate(
      presentation,
      [{ name: 'duration', type: 'number', constraints: { min: minDuration } }],
      errors,
      [],
    );
  }

  // Validate application variables.
  if (appVersion.presentationProperties && presentation.applicationVariables) {
    validate(
      presentation.applicationVariables,
      appVersion.presentationProperties,
      errors,
      ['applicationVariables'],
    );
  }

  return errors;
}
