import * as T from '../../PresentationTypes';

export default function isPathEqual(path1: T.Path, path2: T.Path): boolean {
  if (path1.length !== path2.length) return false;
  return path1.every((p, i) => p === path2[i]);
}
