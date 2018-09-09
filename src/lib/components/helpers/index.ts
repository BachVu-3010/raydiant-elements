import * as React from 'react';

export const preventDefault = (fn?: () => any) => (
  e: React.MouseEvent<any>,
) => {
  e.preventDefault();
  if (fn) {
    fn();
  }
};
