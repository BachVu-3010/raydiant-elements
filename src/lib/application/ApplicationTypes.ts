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

export interface SelectionOption {
  value: string;
  name?: string;
  thumbnailUrl?: string;
  // Label is what remote options can send instead of name.
  // We should normalize on `label` in the future.
  label?: string;
  // Default can be set by a remote options url to specify the default
  // value of the input.
  default?: boolean;
  disabled?: boolean;
  helperText?: string;
  helperLink?: string;
  error?: boolean;
}

export interface Image {
  thumbnailUrl: string;
  id: string;
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
  multiple?: boolean;
  options?: SelectionOption[];
  options_url?: string;
  // Radio Selection
  radioOptions?: SelectionOption[];
  exclusive?: boolean;
  // OAuth
  auth_url?: string;
  verify_url?: string;
  verify_qs_param?: string;
  // Array
  singular_name?: string;
  properties?: PresentationProperty[];
  hide?: boolean;
  disable?: boolean;
  // SelectionWithImages
  images_url?: string;
}

export interface Strings {
  // TODO: This is the reason why we can't have a presentation property with the
  // name 'description' (or 'callToAction'). These should be fields on the actual
  // application_version table. We should just remove strings.
  callToAction?: string;
  description?: string;
  [key: string]: string;
}

export interface ApplicationVersion {
  id: string;
  name: string;
  presentationProperties: PresentationProperty[];
  strings: Strings;
  thumbnailUrl?: string;
  iconUrl?: string;
  websiteUrl?: string;
  // configurable_duration is deprecated in favour of all Mira apps now being
  // dynamic duration (responsible for firing their own onComplete). We still
  // need to support it for legacy apps and embedded apps.
  hasConfigurableDuration?: boolean;
  embeddedUrlFormat?: string;
}

export interface Application {
  id: string;
  currentAppVersion: ApplicationVersion;
}
