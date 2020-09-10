import * as React from 'react';
import isElementSelected from './isElementSelected';
const sortChildrenBySelected = (
  value: string | string[],
  children: Array<React.ReactElement<any>>,
) => {
  // We need to cast to React.ReactElement<any> here because
  // React.ReactChild does not allow us to access child.props.
  const array = React.Children.toArray(children) as Array<
    React.ReactElement<any>
  >;
  // Move selected items to the top of the list.
  return array.sort((childA, childB) => {
    if (isElementSelected(value, childA) && !isElementSelected(value, childB)) {
      return -1;
    } else if (
      !isElementSelected(value, childA) &&
      isElementSelected(value, childB)
    ) {
      return 1;
    }
    return 0;
  });
};

export default sortChildrenBySelected;
