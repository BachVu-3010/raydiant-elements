export type ScreenOrientation = 'normal' | 'left' | 'right';

export interface Device {
  id: string;
  name: string;
  description: string;
  resinUuid: string;
  screenDimensions: string;
  screenOrientation: ScreenOrientation;
  playlistId: string | null;
}

export interface AffectedDevice {
  id: string;
  name: string;
}

export interface Playlist {
  id: string;
  name: string;
}

export interface PlaylistsByOwner {
  [profileId: string]: {
    profile: { id: string; name: string };
    playlists: Playlist[];
  };
}
