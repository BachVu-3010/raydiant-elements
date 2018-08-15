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
});
