export const devices = [
  {
    id: 'DEVICE_ID_1',
    name: "Dale's Screen",
    showConnectivityStatus: true,
    isOnline: true,
    hasAFileError: false,
    defaultSequence: [],
    needsPublish: true,
    deployedPresentations: {
      PRESENTATION_ID_1: {
        id: 'PRESENTATION_ID_1',
        name: 'Menus',
      },
      PRESENTATION_ID_2: {
        id: 'PRESENTATION_ID_2',
        name: 'Clock',
      },
    },
  },
  {
    id: 'DEVICE_ID_2',
    name: "Laura's Screen",
    showConnectivityStatus: true,
    isOnline: true,
    hasAFileError: true,
    defaultSequence: [],
    deployedPresentations: {
      PRESENTATION_ID_1: {
        id: 'PRESENTATION_ID_1',
        name: 'Menus',
      },
      PRESENTATION_ID_2: {
        id: 'PRESENTATION_ID_2',
        name: 'Clock',
      },
    },
  },
];
export const deviceGroups = [
  {
    id: 'GROUP_ID_1',
    name: "Dale's Screen Group",
    hasAFileError: false,
    defaultSequence: ['PRESENTATION_ID_3'],
    deployedPresentations: {},
    showConnectivityStatus: true,
  },
];