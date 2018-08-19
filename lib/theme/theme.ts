import createTheme from './createTheme';

const common = {
  typography: {
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#414698',
      dark: '#323785',
      contrastText: '#ffffff',
    },
    error: {
      main: '#eb5843',
      dark: '#e54734',
      contrastText: '#ffffff',
    },
    progress: {
      main: '#41984d',
      dark: '#32853d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f8b91c',
      dark: '#f6aa14',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: 2,
  },
  modal: {
    default: {
      overlayBackground: 'rgba(0, 0, 0, 0.5)',
      shadow: '0 4px 10px 0 rgba(0, 0, 0, 0.29)',
    },
  },
};

export const light = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#292834',
    },
    background: {
      default: '#ffffff',
    },
  },
  button: {
    default: {
      background: '#ffffff',
      foreground: '#292834',
      foregroundMuted: 'rgba(41, 40, 52, 0.6)',
      border: '#c6cedc',
    },
  },
  input: {
    default: {
      background: '#f3f4f6',
      foreground: '#292834',
      foregroundMuted: 'rgba(41, 40, 52, 0.6)',
      border: '#292834',
    },
  },
  checkbox: {
    default: {
      background: '#ffffff',
      backgroundChecked: common.palette.primary.main,
      foreground: '#ffffff',
      border: '#303141',
      borderMuted: 'rgba(41, 40, 52, 0.5)',
    },
  },
  switch: {
    default: {
      bar: '#C8C9CC',
      barChecked: common.palette.progress.main,
      knob: '#ffffff',
      knobMuted: '#b1b1b1',
      foreground: '#292834',
      foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    },
  },
  tab: {
    default: {
      foreground: '#292834',
      border: common.palette.primary.main,
    },
  },
  progress: {
    default: {
      background: common.palette.primary.main,
    },
  },
});

export const grey = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#292834',
    },
    background: {
      default: '#f3f4f6',
    },
  },
  button: {
    default: {
      background: '#ffffff',
      foreground: '#292834',
      foregroundMuted: 'rgba(41, 40, 52, 0.6)',
      border: '#c6cedc',
    },
  },
  input: {
    default: {
      background: '#ffffff',
      foreground: '#292834',
      foregroundMuted: 'rgba(41, 40, 52, 0.6)',
      border: '#292834',
    },
  },
  checkbox: {
    default: {
      background: '#ffffff',
      backgroundChecked: common.palette.primary.main,
      foreground: '#ffffff',
      border: '#303141',
      borderMuted: 'rgba(41, 40, 52, 0.5)',
    },
  },
  switch: {
    default: {
      bar: '#C8C9CC',
      barChecked: common.palette.progress.main,
      knob: '#ffffff',
      knobMuted: '#b1b1b1',
      foreground: '#292834',
      foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    },
  },
  tab: {
    default: {
      foreground: '#292834',
      border: common.palette.primary.main,
    },
  },
  progress: {
    default: {
      background: common.palette.primary.main,
    },
  },
});

export const dark = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#303141',
    },
  },
  button: {
    default: {
      background: 'rgba(0, 0, 0, 0.5)',
      foreground: '#ffffff',
      foregroundMuted: 'rgba(255, 255, 255, 0.5)',
      border: 'rgba(255, 255, 255, 0.2)',
    },
  },
  input: {
    default: {
      background: 'rgba(255, 255, 255, 0.15)',
      foreground: '#ffffff',
      foregroundMuted: 'rgba(255, 255, 255, 0.5)',
      border: '#ffffff',
    },
  },
  checkbox: {
    default: {
      background: 'rgba(255, 255, 255, 0.15)',
      backgroundChecked: '#ffffff',
      foreground: common.palette.primary.main,
      border: '#ffffff',
      borderMuted: 'rgba(255, 255, 255, 0.5)',
    },
  },
  switch: {
    default: {
      bar: 'rgba(255, 255, 255, 0.2)',
      barChecked: common.palette.progress.main,
      knob: '#ffffff',
      knobMuted: '#b1b1b1',
      foreground: '#ffffff',
      foregroundMuted: 'rgba(255, 255, 255, 0.5)',
    },
  },
  tab: {
    default: {
      foreground: '#ffffff',
      border: '#ffffff',
    },
  },
  progress: {
    default: {
      background: '#ffffff',
    },
  },
});
