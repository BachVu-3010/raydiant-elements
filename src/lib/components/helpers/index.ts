import * as React from 'react';

export const preventDefault = (fn?: () => any) => (
  e: React.MouseEvent<any>,
) => {
  e.preventDefault();
  if (fn) {
    fn();
  }
};

export const testAttrName = 'data-test';
export const testAttr = (testId: string) => ({ [testAttrName]: testId });
export const testSelector = (testId: string) => `[${testAttrName}="${testId}"]`;
