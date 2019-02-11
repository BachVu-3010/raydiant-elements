import createTheme from './createTheme';

const common = {
  typography: {
    fontSize: 14,
  },
  fontSizes: {
    xs: '0.786rem', // 11 px
    sm: '0.857rem', // 12 px
    md: '1rem',
    lg: '1.143rem', // 16px
    xl: '2.571rem', // 36px
  },
  zIndex: {
    menu: 1000,
    modal: 2000,
    popover: 3000,
    fileDropper: 4000,
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
    divider: '#c6cedc',
  },
  logo: {
    default: 'https://public-assets.getmira.com/mira-logo.svg',
    contrast: 'https://public-assets.getmira.com/mira-logo-white.svg',
    width: 66,
  },
  loginAsset: {
    default: 'https://public-assets.getmira.com/mira-login-asset.png',
  },
  modal: {
    overlayBackground: 'rgba(0, 0, 0, 0.5)',
    shadow: '0 4px 10px 0 rgba(0, 0, 0, 0.29)',
  },
  borderRadius: {
    xs: 0,
    sm: 2,
    md: 4,
  },
};

export const light = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#292834',
      secondary: 'rgba(32, 32, 42, 0.6)',
      link: '#009bff',
    },
    background: {
      default: '#ffffff',
      gradient: '',
      inset: '#f3f4f6',
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
  actionBar: {
    border: '#c6cedc',
  },
  popover: {
    headerBackground: '#e8eaee',
    contentBackground: 'rgba(255, 255 ,255)',
    borderColor: '#cdd4e1',
    color: '#292834',
  },
});

export const grey = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#292834',
      secondary: 'rgba(32, 32, 42, 0.6)',
      link: '#009bff',
    },
    background: {
      default: '#f3f4f6',
      gradient: '',
      inset: '#d8d8d8',
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
  actionBar: {
    border: '#c6cedc',
  },
  popover: {
    headerBackground: 'rgba(255, 255 ,255)',
    contentBackground: '#e8eaee',
    borderColor: '#cdd4e1',
    color: '#292834',
  },
});

export const dark = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.5)',
      link: '#009bff',
    },
    background: {
      default: '#303141',
      gradient: 'linear-gradient(178deg, #3d3d4e, #20202a);',
      inset: '#171828',
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
  actionBar: {
    border: 'rgba(255, 255, 255, 0.15)',
  },
  // TODO: needs tweaking
  popover: {
    headerBackground: '#292834',
    contentBackground: '#292834',
    borderColor: 'rgba(255, 255, 255, 0.15)',
    color: 'rgba(255, 255, 255)',
  },
});
