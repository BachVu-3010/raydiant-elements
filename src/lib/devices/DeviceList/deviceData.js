export const devices = [
  {
    id: 'DEVICE_ID_1',
    name: "Dale's Screen",
    isOnline: false,
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
    defaultSequence: ['PRESENTATION_ID_3'],
    deployedPresentations: {},
  },
];
