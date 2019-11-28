export type ScreenOrientation = 'normal' | 'left' | 'right';

export interface Device {
  id: string;
  name: string;
  description: string;
  resinUuid: string;
  isOnline: boolean;
  screenDimensions: string;
  screenOrientation: ScreenOrientation;
  playlistId: string | null;
}

export interface Playlist {
  id: string;
  name: string;
}
