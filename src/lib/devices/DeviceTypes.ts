import * as P from '../presentation/PresentationTypes';

export interface DeviceBase {
  id: string;
  name: string;
  isOnline: boolean;
  defaultSequence: string[];
  deployedPresentations: { [key: string]: P.Presentation };
}

export type ScreenOrientation = 'normal' | 'left' | 'right';

export interface Device extends DeviceBase {
  description: string;
  screenDimensions: string;
  screenOrientation: ScreenOrientation;
}

export interface DeviceGroup extends DeviceBase {
  devices: Device[];
}
