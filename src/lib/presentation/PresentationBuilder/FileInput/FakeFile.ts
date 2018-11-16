export default class FakeFile extends Blob {
  name: string;
  lastModified: number;

  constructor(filename: string) {
    super();
    this.name = filename;
    // We don't care about the lastModified value.
    this.lastModified = -1;
  }
}
