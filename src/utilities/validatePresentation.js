export default function validatePresentation(
  presentation,
  application,
  minDuration
) {
  const errors = {};

  if (!presentation.name) {
    errors.name = 'Oops! Please enter required field.';
  }

  // Only validate duration for configurable duration apps.
  if (application.configurable_duration) {
    if (!presentation.duration) {
      errors.duration = 'Oops! Please enter required field.';
    } else if (presentation.duration < minDuration) {
      errors.duration = `Oops! Please enter a value greater than ${minDuration}.`;
    }
  }

  if (application.presentation_properties && presentation.application_vars) {
    application.presentation_properties.forEach(prop => {
      const value = presentation.application_vars[prop.name];
      // TODO: Remove prop.type !== 'link' once all apps have
      // been updated to use helperLink.
      const isRequired = !prop.optional && prop.type !== 'link';
      // A value is set if it's truthy, false or 0.
      const hasValue = value || value === false || value === 0;

      if (isRequired && !hasValue) {
        errors[prop.name] = 'Oops! Please enter required field.';
      }

      if (prop.type === 'number' && hasValue) {
        if (prop.min !== undefined && value < prop.min) {
          errors[prop.name] = `Oops! Please enter a value greater than ${
            prop.min
          }.`;
        }

        if (prop.max !== undefined && value > prop.max) {
          errors[prop.name] = `Oops! Please enter a value less than ${
            prop.max
          }.`;
        }
      }

      if ((prop.type === 'string' || prop.type === 'text') && hasValue) {
        if (prop.maxLength !== undefined && value.length > prop.maxLength) {
          errors[prop.name] = `Oops! Please enter a value less than ${
            prop.maxLength
          } characters.`;
        }
      }
    });
  }

  return errors;
}
