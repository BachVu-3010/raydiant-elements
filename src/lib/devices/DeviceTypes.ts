import * as P from '../presentation/PresentationTypes';

export interface DeviceBase {
  id: string;
  name: string;
  isOnline: boolean;
  defaultSequence: string[];
  deployedPresentations: { [key: string]: P.Presentation };
}

export interface Device extends DeviceBase {
  description: string;
  screenDimensions: string;
  screenOrientation: string;
}

export interface DeviceGroup extends DeviceBase {
  devices: Device[];
}
