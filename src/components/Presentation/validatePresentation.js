function validate(appVars, properties, errors, path) {
  properties.forEach(prop => {
    const value = appVars[prop.name];
    const constraints = prop.constraints || {};
    // TODO: Remove prop.type !== 'link' once all apps have
    // been updated to use helper_link.
    const isRequired = !prop.optional && prop.type !== 'link';
    // A value is set if it's truthy, false or 0 or has a length.
    const hasValue = Array.isArray(value)
      ? value.length > 0
      : value || value === false || value === 0;

    if (isRequired && !hasValue) {
      errors.push({
        path: [...path, prop.name],
        message: 'Oops! Please enter required field.',
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
      value.forEach((itemValue, index) => {
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
  presentation,
  application,
  minDuration
) {
  const errors = [];

  // Validate name.
  validate(presentation, [{ name: 'name', type: 'string' }], errors, []);

  // Only validate duration for configurable duration apps.
  if (application.configurable_duration) {
    validate(
      presentation,
      [{ name: 'duration', type: 'number', constraints: { min: minDuration } }],
      errors,
      []
    );
  }

  // Validate application variables.
  if (application.presentation_properties && presentation.application_vars) {
    validate(
      presentation.application_vars,
      application.presentation_properties,
      errors,
      ['application_vars']
    );
  }

  return errors;
}

export const validateAppVars = (appVars, properties) => {
  const errors = [];
  validate(appVars, properties, errors, []);
  return errors;
};
