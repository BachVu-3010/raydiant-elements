const pluralize = (word: string, count: number): string =>
  `${count} ${count === 1 ? word : `${word}s`}`;

export default pluralize;
