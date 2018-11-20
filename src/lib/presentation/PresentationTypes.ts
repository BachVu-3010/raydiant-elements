// Represents the path to a presentation property value
// ie. ['applicationVariables', 'headingText'],  ['applicationVariables', 'menuItems', 0, 'name']
export type Path = Array<string | number>;

// A crumb is the path to an item in an array input.
export type Crumbs = Path[];

export interface SelectionOption {
  name: string;
  value: string;
}

// The FileUpload interface is the structure returned by the API for uploaded files.
export interface FileUpload {
  filename: string;
  url: string;
  'content-type': string;
  'content-length': number;
}

export interface Constraints {
  // Mixing hyphen case, snake case and no case... :'(
  // TODO: Clean these up.
  'content-types'?: string[];
  'content-length'?: number;
  maxlength?: number;
  min?: number;
  max?: number;
  max_items?: number;
}

export interface PresentationProperty {
  type: string;
  name: string;
  default?: any;
  constraints?: Constraints;
  helper_text?: string;
  helper_link?: string;
  optional?: boolean;
  // Selection
  options?: SelectionOption[];
  // OAuth
  auth_url?: string;
  verify_url?: string;
  verify_qs_param?: string;
  // Array
  singular_name?: string;
  properties?: PresentationProperty[];
}

export interface Strings {
  [key: string]: string;
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
}

export interface AppVersion {
  id: string;
  name: string;
  presentationProperties: PresentationProperty[];
  strings: Strings;
  thumbnailUrl?: string;
  iconUrl?: string;
  // configurable_duration is deprecated in favour of all Mira apps now being
  // dynamic duration (responsible for firing their own onComplete). We still
  // need to support it for legacy apps and embedded apps.
  hasConfigurableDuration?: boolean;
}

export interface Theme {
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
