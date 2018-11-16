import FakeFile from './FakeFile';

export default class FakeFileList {
  files: FakeFile[];
  // We need to define an index signature to satisfy the FileList type.
  [k: string]: any;

  constructor() {
    this.files = [];
  }

  add(filename: string) {
    this.files.push(new FakeFile(filename));
  }

  item(index: number) {
    return this.files[index];
  }

  get length() {
    return this.files.length;
  }

  [Symbol.iterator]() {
    return this.files.values();
  }
}
