import * as React from 'react';

export const preventDefault = (fn?: (e: React.MouseEvent<any>) => any) => (
  e: React.MouseEvent<any>,
) => {
  e.preventDefault();
  if (fn) {
    // passing through 'e' as it's necessary when chaining event methods
    fn(e);
  }
};

export const stopPropagation = (fn?: () => any) => (
  e: React.MouseEvent<any>,
) => {
  e.stopPropagation();
  if (fn) {
    fn();
  }
};

export const pluralize = (word: string, count: number): string => {
  return count === 1 ? `${count} ${word}` : `${count} ${word}s`;
};

export const testAttrName = 'data-test';
export const testAttr = (testId: string) => ({ [testAttrName]: testId });
export const testSelector = (testId: string) => `[${testAttrName}="${testId}"]`;
