export const devices = [
  {
    id: 'DEVICE_ID_1',
    name: "Dale's Screen",
    resinUuid: 'resinUuid',
    isOnline: true,
    needsPublish: true,
    screenOrientation: 'normal',
    screenDimensions: '1920x1080',
    wifiStrength: 60,
    isEthernet: false,
    playlistId: 'PLALIST_ID_1',
  },
  {
    id: 'DEVICE_ID_2',
    name: "Laura's Screen",
    resinUuid: 'resinUuid',
    isOnline: true,
    wifiStrength: 0,
    isEthernet: true,
    playlistId: 'PLALIST_ID_2',
  },
  {
    id: 'DEVICE_ID_3',
    name: "Hank's Screen",
    resinUuid: 'resinUuid',
    isOnline: true,
    wifiStrength: 90,
    isEthernet: false,
    playlistId: 'PLALIST_ID_3',
  },
  {
    id: 'DEVICE_ID_4',
    name: "Alicia's Screen",
    resinUuid: 'resinUuid',
    isOnline: false,
    wifiStrength: 90,
    isEthernet: false,
    playlistId: 'PLALIST_ID_4',
  },
  {
    id: 'DEVICE_ID_5',
    name: "Dougie's Audio Device",
    isAudioOnly: true,
    resinUuid: 'resinUuid',
    isOnline: false,
    wifiStrength: 90,
    isEthernet: false,
  },
];

export const playlists = [
  { id: 'PLALIST_ID_1', name: 'Playlist 1' },
  { id: 'PLALIST_ID_2', name: 'Playlist 2' },
  { id: 'PLALIST_ID_3', name: 'Playlist 3' },
  { id: 'PLALIST_ID_4', name: 'Playlist 4' },
];
