declare module 'react-color/lib/Chrome';

// Workaround for https://github.com/mariocasciaro/object-path-immutable/issues/35.
// Not submitting a PR with this because it's not the full fix. We'd need to export
// a function as well for chaining (which I'm currently not sure how to do):
// immutable(obj).set('a.b', 'f').del('a.c.0').value()
declare module 'object-path-immutable' {
  type Path = string | Array<string | number>;

  interface WrappedObject<T> {
    set(path?: Path, value?: any): WrappedObject<T>;
    push(path?: Path, value?: any): WrappedObject<T>;
    del(path?: Path): WrappedObject<T>;
    assign(path?: Path, source?: T): WrappedObject<T>;
    update(path?: Path, updater?: (formerValue: any) => any): WrappedObject<T>;
    value(): T;
  }

  export function set<T = object>(src: T, path?: Path, value?: any): T;
  export function push<T = object>(src: T, path?: Path, value?: any): T;
  export function del<T = object>(src: T, path?: Path): T;
  export function assign<T = object>(src: T, path?: Path, source?: T): T;
  export function update<T = object>(
    src: T,
    path?: Path,
    updater?: (formerValue: any) => any,
  ): WrappedObject<T>;
}

declare module 'is-touch-device' {
  type IsTouchDevice = () => boolean;
  const isTouchDeviceExport: IsTouchDevice;
  export = isTouchDeviceExport;
}

declare module '@material-ui/lab/esm/TreeView/TreeViewContext';

declare module 'lodash.isequal' {
  type IsEqual<T = any> = (value: T, other: T) => boolean;
  const isEqualExport: IsEqual;
  export = isEqualExport;
}
