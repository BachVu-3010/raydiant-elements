export const testAttrName = 'data-test';
export const testAttr = (testId: string) => ({ [testAttrName]: testId });
export const testSelector = (testId: string) => `[${testAttrName}="${testId}"]`;
