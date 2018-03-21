import isEqualArray from 'array-equal';

// Flatten errors so there is only one error per root prop. The error with the
// longest path wins.
export default errors => {
  const propErrors = [];

  errors.forEach(error => {
    const rootPropPath = error.path.slice(0, 2);
    const existingPropError = propErrors.filter(propError =>
      isEqualArray(propError.propPath, rootPropPath)
    )[0];

    if (existingPropError) {
      if (existingPropError.errorPath.length < error.path.length) {
        existingPropError.errorPath = error.path;
      }
    } else {
      propErrors.push({ propPath: rootPropPath, errorPath: error.path });
    }
  });

  return propErrors;
};
