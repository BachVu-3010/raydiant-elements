interface Presentation {
  applicationThumbnailUrl: string;
  thumbnailUrl: string;
}

export interface Device {
  id: string;
  name: string;
  isOnline: boolean;
  hasFileError?: boolean;
  showPublish?: boolean;
  showConnectivityStatus?: boolean;
  defaultSequence: string[];
  deployedPresentations: { [id: string]: Presentation };
}

export interface DeviceGroup {
  id: string;
  name: string;
  devices: Device[];
  defaultSequence: string[];
  deployedPresentations: { [id: string]: Presentation };
}
