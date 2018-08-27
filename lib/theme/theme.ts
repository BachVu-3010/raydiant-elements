import createTheme from './createTheme';

const common = {
  typography: {
    fontSize: 14,
  },
  fontSizes: {
    sm: '0.857rem', // 12 px
    md: '1rem',
    lg: '1.143rem', // 16px
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
  logo: {
    default: 'https://public-assets.getmira.com/mira-logo.svg',
    contrast: 'https://public-assets.getmira.com/mira-logo-white.svg',
  },
  modal: {
    overlayBackground: 'rgba(0, 0, 0, 0.5)',
    shadow: '0 4px 10px 0 rgba(0, 0, 0, 0.29)',
  },
};

export const light = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#292834',
      secondary: 'rgba(41, 40, 52, 0.7)',
    },
    background: {
      default: '#ffffff',
    },
  },
  button: {
    background: '#ffffff',
    foreground: '#292834',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: '#c6cedc',
  },
  input: {
    background: '#f3f4f6',
    foreground: '#292834',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: '#292834',
  },
  checkbox: {
    background: '#ffffff',
    backgroundChecked: common.palette.primary.main,
    foreground: '#ffffff',
    border: '#303141',
    borderMuted: 'rgba(41, 40, 52, 0.5)',
  },
  switch: {
    bar: '#C8C9CC',
    barChecked: common.palette.progress.main,
    knob: '#ffffff',
    knobMuted: '#b1b1b1',
    foreground: '#292834',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
  },
  tab: {
    foreground: '#292834',
    border: '#c6cedc',
    activeBorder: common.palette.primary.main,
  },
  progress: {
    background: common.palette.primary.main,
  },
  titlebar: {
    border: '#c6cedc',
  },
});

export const grey = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#292834',
      secondary: 'rgba(41, 40, 52, 0.6)',
    },
    background: {
      default: '#f3f4f6',
    },
  },
  button: {
    background: '#ffffff',
    foreground: '#292834',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: '#c6cedc',
  },
  input: {
    background: '#ffffff',
    foreground: '#292834',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: '#292834',
  },
  checkbox: {
    background: '#ffffff',
    backgroundChecked: common.palette.primary.main,
    foreground: '#ffffff',
    border: '#303141',
    borderMuted: 'rgba(41, 40, 52, 0.5)',
  },
  switch: {
    bar: '#C8C9CC',
    barChecked: common.palette.progress.main,
    knob: '#ffffff',
    knobMuted: '#b1b1b1',
    foreground: '#292834',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
  },
  tab: {
    foreground: '#292834',
    border: '#c6cedc',
    activeBorder: common.palette.primary.main,
  },
  progress: {
    background: common.palette.primary.main,
  },
  titlebar: {
    border: '#c6cedc',
  },
});

export const dark = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.5)',
    },
    background: {
      default: '#303141',
    },
  },
  button: {
    background: 'rgba(0, 0, 0, 0.5)',
    foreground: '#ffffff',
    foregroundMuted: 'rgba(255, 255, 255, 0.5)',
    border: 'rgba(255, 255, 255, 0.2)',
  },
  input: {
    background: 'rgba(255, 255, 255, 0.15)',
    foreground: '#ffffff',
    foregroundMuted: 'rgba(255, 255, 255, 0.5)',
    border: '#ffffff',
  },
  checkbox: {
    background: 'rgba(255, 255, 255, 0.15)',
    backgroundChecked: '#ffffff',
    foreground: common.palette.primary.main,
    border: '#ffffff',
    borderMuted: 'rgba(255, 255, 255, 0.5)',
  },
  switch: {
    bar: 'rgba(255, 255, 255, 0.2)',
    barChecked: common.palette.progress.main,
    knob: '#ffffff',
    knobMuted: '#b1b1b1',
    foreground: '#ffffff',
    foregroundMuted: 'rgba(255, 255, 255, 0.5)',
  },
  tab: {
    foreground: '#ffffff',
    border: '',
    activeBorder: '#ffffff',
  },
  progress: {
    background: '#ffffff',
  },
  titlebar: {
    border: '',
  },
});
