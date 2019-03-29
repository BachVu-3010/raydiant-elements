import * as React from 'react';

const stopPropagation = (fn?: () => any) => (
  event: React.SyntheticEvent<any>,
) => {
  event.stopPropagation();
  if (fn) fn();
};

export default stopPropagation;
