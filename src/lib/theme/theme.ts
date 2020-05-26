import createTheme from './createTheme';

const colors = {
  white: '#FFFFFF',
  grey: '#E3E3E2',
  lightGrey: '#F0F0EE',
  limeGreen: '#28D972',
  skyBlue: '#009BD2',
  forestGreen: '#006D5D',
  navy: '#003670',
  yellow: '#edde4f',
};

const common = {
  fontFaces: [
    {
      fontFamily: 'Gilroy',
      src: `url('https://fonts.raydiant.com/Gilroy-Regular.woff') format('woff')`,
      fontWeight: 400,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Gilroy',
      src: `url('https://fonts.raydiant.com/Gilroy-SemiBold.woff') format('woff')`,
      fontWeight: 500,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Gilroy',
      src: `url('https://fonts.raydiant.com/Gilroy-Bold.woff') format('woff')`,
      fontWeight: 600,
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Gilroy',
      src: `url('https://fonts.raydiant.com/Gilroy-Black.woff') format('woff')`,
      fontWeight: 700,
      fontStyle: 'normal',
    },
  ],
  typography: {
    fontSize: 14,
    fontFamily: 'Gilroy,Roboto,sans-serif',
  },
  fontSizes: {
    xxs: '0.643rem', // 9 px
    xs: '0.786rem', // 11 px
    sm: '0.857rem', // 12 px
    md: '1rem', // 14px
    lg: '1.143rem', // 16px
    xl: '2.857rem', // 40px
    xxl: '6.25rem', // 100px
  },
  zIndex: {
    shadow: 100,
    menu: 1000,
    modal: 2000,
    popover: 3000,
    fileDropper: 4000,
  },
  palette: {
    primary: {
      main: colors.navy,
      dark: colors.navy,
      contrastText: colors.white,
    },
    error: {
      main: '#eb5843',
      dark: '#e54734',
      contrastText: colors.white,
    },
    progress: {
      main: colors.limeGreen,
      dark: colors.limeGreen,
      contrastText: colors.navy,
    },
    warning: {
      main: '#f8b91c',
      dark: '#f6aa14',
      contrastText: colors.white,
    },
    divider: colors.grey,
    action: {
      selected: colors.lightGrey,
      dropping: colors.skyBlue,
    },
  },
  logo: {
    width: 122,
    squareWidth: 20,
  },
  loginAsset: {
    default: 'https://assets.raydiant.com/raydiant-login-asset.png',
  },
  modal: {
    overlayBackground: 'rgba(0, 0, 0, 0.5)',
    shadow: '0 4px 10px 0 rgba(0, 0, 0, 0.29)',
  },
  borderRadius: {
    xs: 0,
    sm: 4,
    md: 6,
  },
};

export const light = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.3)',
      link: colors.skyBlue,
      heading: colors.navy,
    },
    background: {
      default: colors.white,
      gradient: '',
      inset: colors.grey,
      paper: '#f3f4f6',
    },
  },
  logo: {
    ...common.logo,
    src: 'https://assets.raydiant.com/raydiant-logo-sky-blue.svg',
    squareSrc: 'https://assets.raydiant.com/raydiant-logo-square-sky-blue.svg',
  },
  menu: {
    background: colors.white,
    foreground: colors.navy,
    border: colors.navy,
  },
  button: {
    background: 'transparent',
    foreground: colors.navy,
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: colors.navy,
    backgroundSelected: colors.limeGreen,
    fabLabel: colors.navy,
  },
  input: {
    background: '#f3f4f6',
    foreground: 'rgba(41, 40, 52, 1)',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: 'rgba(41, 40, 52, 0.6)',
  },
  checkbox: {
    background: colors.white,
    backgroundChecked: common.palette.progress.main,
    foreground: colors.white,
    border: '#303141',
    borderMuted: 'rgba(41, 40, 52, 0.5)',
  },
  switch: {
    bar: '#C8C9CC',
    barChecked: common.palette.progress.main,
    knob: colors.white,
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
  dropzone: {
    border: colors.grey,
  },
});

export const grey = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(32, 32, 42, 0.6)',
      link: colors.skyBlue,
      heading: colors.navy,
    },
    background: {
      default: '#f3f4f6',
      gradient: '',
      inset: '#d8d8d8',
      paper: colors.white,
    },
  },
  logo: {
    ...common.logo,
    src: 'https://assets.raydiant.com/raydiant-logo-sky-blue.svg',
    squareSrc: 'https://assets.raydiant.com/raydiant-logo-square-sky-blue.svg',
  },
  menu: {
    background: colors.grey,
    foreground: colors.navy,
    border: colors.navy,
  },
  button: {
    background: 'transparent',
    foreground: colors.navy,
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: colors.navy,
    backgroundSelected: colors.limeGreen,
    fabLabel: colors.navy,
  },
  input: {
    background: colors.white,
    foreground: 'rgba(41, 40, 52, 1)',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: 'rgba(41, 40, 52, 0.6)',
  },
  checkbox: {
    background: colors.white,
    backgroundChecked: common.palette.progress.main,
    foreground: colors.white,
    border: '#303141',
    borderMuted: 'rgba(41, 40, 52, 0.5)',
  },
  switch: {
    bar: '#C8C9CC',
    barChecked: common.palette.progress.main,
    knob: colors.white,
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
  dropzone: {
    border: colors.grey,
  },
});

export const medium = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: colors.navy,
      secondary: colors.navy,
      link: colors.white,
      heading: colors.white,
    },
    background: {
      default: colors.skyBlue,
      gradient: 'linear-gradient(178deg, #3d3d4e, #20202a);',
      inset: '#171828',
      paper: colors.white,
    },
  },
  logo: {
    ...common.logo,
    src: 'https://assets.raydiant.com/raydiant-logo-navy.svg',
    squareSrc: 'https://assets.raydiant.com/raydiant-logo-square-navy.svg',
  },
  menu: {
    background: colors.skyBlue,
    foreground: colors.navy,
    border: colors.navy,
  },
  button: {
    background: 'transparent',
    foreground: colors.navy,
    foregroundMuted: colors.navy,
    border: colors.navy,
    backgroundSelected: colors.navy,
    fabLabel: colors.navy,
  },
  input: {
    background: colors.white,
    foreground: 'rgba(41, 40, 52, 1)',
    foregroundMuted: 'rgba(41, 40, 52, 0.6)',
    border: 'rgba(41, 40, 52, 0.6)',
  },
  checkbox: {
    background: 'rgba(255, 255, 255, 0.15)',
    backgroundChecked: common.palette.progress.main,
    foreground: colors.white,
    border: colors.white,
    borderMuted: 'rgba(255, 255, 255, 0.5)',
  },
  switch: {
    bar: 'rgba(255, 255, 255, 0.2)',
    barChecked: common.palette.progress.main,
    knob: colors.white,
    knobMuted: '#b1b1b1',
    foreground: colors.white,
    foregroundMuted: 'rgba(255, 255, 255, 0.5)',
  },
  tab: {
    foreground: colors.white,
    border: '',
    activeBorder: colors.white,
  },
  progress: {
    background: colors.white,
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
  dropzone: {
    border: colors.grey,
  },
});

export const dark = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: colors.white,
      secondary: colors.grey,
      link: colors.white,
      heading: colors.skyBlue,
    },
    background: {
      default: colors.navy,
      gradient: 'linear-gradient(178deg, #3d3d4e, #20202a);',
      inset: '#171828',
      paper: colors.white,
    },
  },
  logo: {
    ...common.logo,
    src: 'https://assets.raydiant.com/raydiant-logo-sky-blue.svg',
    squareSrc: 'https://assets.raydiant.com/raydiant-logo-square-sky-blue.svg',
  },
  menu: {
    background: colors.navy,
    foreground: colors.white,
    border: colors.skyBlue,
  },
  button: {
    background: 'transparent',
    foreground: colors.white,
    foregroundMuted: colors.white,
    border: colors.white,
    backgroundSelected: colors.white,
    fabLabel: colors.white,
  },
  input: {
    background: 'rgba(255, 255, 255, 0.15)',
    foreground: colors.white,
    foregroundMuted: 'rgba(255, 255, 255, 0.5)',
    border: 'rgba(255, 255, 255, 0.5)',
  },
  checkbox: {
    background: 'rgba(255, 255, 255, 0.15)',
    backgroundChecked: common.palette.progress.main,
    foreground: colors.white,
    border: colors.white,
    borderMuted: 'rgba(255, 255, 255, 0.5)',
  },
  switch: {
    bar: 'rgba(255, 255, 255, 0.2)',
    barChecked: common.palette.progress.main,
    knob: colors.white,
    knobMuted: '#b1b1b1',
    foreground: colors.white,
    foregroundMuted: 'rgba(255, 255, 255, 0.5)',
  },
  tab: {
    foreground: colors.white,
    border: '',
    activeBorder: colors.white,
  },
  progress: {
    background: colors.white,
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
  dropzone: {
    border: colors.grey,
  },
});
