import * as T from '../../PresentationTypes';
import isEqualPath from './isPathEqual';

export default function getErrorAtPath(
  errors: T.PresentationError[],
  path: T.Path,
): string {
  const error = errors.find(e => isEqualPath(e.path, path));
  return error ? error.message : '';
}
