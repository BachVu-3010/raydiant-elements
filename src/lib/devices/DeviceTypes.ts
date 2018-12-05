interface Presentation {
  applicationThumbnailUrl: string;
  thumbnailUrl: string;
}

export interface Device {
  id: string;
  name: string;
  isOnline: boolean;
  defaultSequence: string[];
  deployedPresentations: { [id: string]: Presentation };

  // Allow for extra props to be passed in
  [key: string]: any;
}

export interface DeviceGroup extends Device {
  devices: Device[];
}
