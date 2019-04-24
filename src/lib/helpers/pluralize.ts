export const pluralizeWithCount = (word: string, count: number): string =>
  `${count} ${pluralize(word, count)}`;

export const pluralize = (word: string, count: number): string =>
  `${count === 1 ? word : `${word}s`}`;

export default pluralizeWithCount;
