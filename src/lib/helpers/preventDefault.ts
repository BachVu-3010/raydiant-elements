import * as React from 'react';

const preventDefault = (fn?: (e: React.SyntheticEvent<any>) => any) => (
  event: React.SyntheticEvent<any>,
) => {
  event.preventDefault();
  if (fn) fn(event);
};

export default preventDefault;
