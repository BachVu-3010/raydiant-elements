import * as objectPath from 'object-path';
import * as T from '../../PresentationTypes';

export default function getValueAtPath(value: any, path: T.Path): any {
  return objectPath.get(value, path);
}
