// Represents the path to a presentation property value
// ie. ['applicationVariables', 'headingText'],  ['applicationVariables', 'menuItems', 0, 'name']
export type Path = Array<string | number>;

// A crumb is the path to an item in an array input.
export type Crumbs = Path[];

// The FileUpload interface is the structure returned by the API for uploaded files.
export interface FileUpload {
  filename: string;
  url: string;
  'content-type': string;
  'content-length': number;
}

export interface ApplicationVariables {
  [key: string]: any;
}

export interface Presentation {
  id: string;
  appVersionId: string;
  name: string;
  themeId?: string;
  applicationVariables: ApplicationVariables;
  duration?: number; // For legacy apps with configurable_duration = true
  hasDynamicThumbnails: boolean;
  thumbnailUrl?: string;
  iconUrl: string;
  applicationThumbnailUrl: string;
  applicationName: string;
}

export interface Theme {
  id: string;
  name: string;
}

export interface SoundZone {
  id: string;
  name: string;
}

export interface PresentationError {
  path: Path;
  message: string;
}

export enum PreviewMode {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
