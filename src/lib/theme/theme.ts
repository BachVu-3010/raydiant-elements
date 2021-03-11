import createTheme from './createTheme';

const colors = {
  white: '#ffffff',
  grey: '#e3e3e2',
  lightGrey: '#f8f8f8',
  limeGreen: '#28d972',
  skyBlue: '#009bd2',
  forestGreen: '#006d5d',
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
    sm: '0.907rem', // 12.7 px
    md: '1.057rem', // 14.8px
    lg: '1.207rem', // 16.9px
    xl: '1.5rem', // 21px
    xxl: '2.564rem', // 35.9px
    xxxl: '6.25rem', // 100px
  },
  zIndex: {
    shadow: 100,
    menu: 1000,
    modal: 1100,
    popover: 1300,
    fileDropper: 4000,
  },
  palette: {
    primary: {
      main: colors.navy,
      dark: colors.navy,
      contrastText: colors.white,
    },
    error: {
      main: '#b00020',
      dark: '#e54734',
      contrastText: colors.white,
    },
    progress: {
      main: colors.limeGreen,
      dark: colors.limeGreen,
      contrastText: colors.navy,
    },
    warning: {
      main: '#edde4f',
      dark: '#f6aa14',
      contrastText: colors.white,
    },
    action: {
      selected: 'rgba(0, 0, 0, 0.07)',
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
    overlayBackground: 'rgba(0, 0, 0, 0.25)',
    shadow: '0 4px 10px 0 rgba(0, 0, 0, 0.29)',
    background: colors.lightGrey,
    foreground: 'rgba(0, 0, 0, 0.6)',
  },
  borderRadius: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 12,
  },
  divider: {
    primary: 'rgba(0,0,0, 0.6)',
    secondary: 'rgba(0,0,0, 0.2)',
  },
  avatar: {
    background: '#82d4ed',
    foreground: colors.navy,
  },
};

export const light = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(32, 32, 42, 0.6)',
      link: colors.skyBlue,
      headingPrimary: colors.navy,
      headingSecondary: 'rgba(0, 0, 0, 0.87)',
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
    foreground: colors.navy,
    underline: colors.navy,
  },
  button: {
    background: 'transparent',
    foreground: colors.navy,
    foregroundMuted: 'rgba(0, 0, 0, 0.2)',
    border: colors.navy,
    backgroundSelected: colors.limeGreen,
    fabLabel: colors.navy,
    backgroundDisabled: '#9e9e9e',
    foregroundDisabled: 'rgba(0, 0, 0, 0.38)',
  },
  input: {
    background: 'rgba(227, 227, 227, 0.4)',
    foreground: 'rgba(0, 0, 0, 0.87)',
    border: 'rgba(0, 0, 0, 0.2)',
    focusedBorder: 'rgba(0, 0, 0, 0.6)',
  },
  checkbox: {
    border: 'rgba(0, 0, 0, 0.4)',
    background: 'rgba(0, 0, 0, 0.6)',
    foreground: colors.white,
  },
  switch: {
    bar: colors.grey,
    barChecked: common.palette.progress.main,
    barCheckedDisabled: '#B6F2C5',
    knob: colors.white,
  },
  tab: {
    foreground: '#292834',
    border: '#c6cedc',
    activeBorder: common.palette.primary.main,
  },
  progress: {
    background: colors.skyBlue,
  },
  actionBar: {
    foreground: 'rgba(0, 0, 0, 0.32)',
    selectedForeground: 'rgba(0, 0, 0, 0.6)',
    background: colors.white,
    border: 'rgba(0, 0, 0, 0.2)',
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
  collapsableSelect: {
    background: colors.lightGrey,
    border: 'rgba(0, 0, 0, 0.2)',
  },
});

export const lightGrey = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(32, 32, 42, 0.6)',
      link: colors.skyBlue,
      headingPrimary: colors.navy,
      headingSecondary: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: colors.lightGrey,
      gradient: '',
      inset: colors.grey,
      paper: colors.white,
    },
  },
  logo: {
    ...common.logo,
    src: 'https://assets.raydiant.com/raydiant-logo-sky-blue.svg',
    squareSrc: 'https://assets.raydiant.com/raydiant-logo-square-sky-blue.svg',
  },
  menu: {
    foreground: colors.navy,
    underline: colors.navy,
  },
  button: {
    background: 'transparent',
    foreground: colors.navy,
    foregroundMuted: 'rgba(0, 0, 0, 0.2)',
    border: colors.navy,
    backgroundSelected: colors.limeGreen,
    fabLabel: colors.navy,
    backgroundDisabled: '#9e9e9e',
    foregroundDisabled: 'rgba(0, 0, 0, 0.38)',
  },
  input: {
    background: 'rgba(227, 227, 227, 0.4)',
    foreground: 'rgba(0, 0, 0, 0.87)',
    border: 'rgba(0, 0, 0, 0.2)',
    focusedBorder: 'rgba(0, 0, 0, 0.6)',
  },
  checkbox: {
    border: 'rgba(0, 0, 0, 0.4)',
    background: 'rgba(0, 0, 0, 0.6)',
    foreground: colors.white,
  },
  switch: {
    bar: colors.grey,
    barChecked: common.palette.progress.main,
    barCheckedDisabled: '#B6F2C5',
    knob: colors.white,
  },
  tab: {
    foreground: '#292834',
    border: '#c6cedc',
    activeBorder: common.palette.primary.main,
  },
  progress: {
    background: colors.skyBlue,
  },
  actionBar: {
    foreground: 'rgba(0, 0, 0, 0.32)',
    selectedForeground: 'rgba(0, 0, 0, 0.6)',
    background: colors.lightGrey,
    border: 'rgba(0, 0, 0, 0.2)',
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
  collapsableSelect: {
    background: colors.white,
    border: 'rgba(0, 0, 0, 0.2)',
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
      headingPrimary: colors.navy,
      headingSecondary: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: colors.grey,
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
    foreground: colors.navy,
    underline: colors.skyBlue,
  },
  button: {
    background: 'transparent',
    foreground: colors.navy,
    foregroundMuted: 'rgba(0, 0, 0, 0.2)',
    border: colors.navy,
    backgroundSelected: colors.limeGreen,
    fabLabel: colors.navy,
    backgroundDisabled: '#9e9e9e',
    foregroundDisabled: 'rgba(0, 0, 0, 0.38)',
  },
  input: {
    background: colors.white,
    foreground: 'rgba(41, 40, 52, 1)',
    border: 'rgba(0, 0, 0, 0.2)',
    focusedBorder: 'rgba(0, 0, 0, 0.6)',
  },
  checkbox: {
    border: 'rgba(0, 0, 0, 0.4)',
    background: 'rgba(0, 0, 0, 0.8)',
    foreground: colors.white,
  },
  switch: {
    bar: 'rgba(32, 32, 42, 0.2)',
    barChecked: common.palette.progress.main,
    barCheckedDisabled: '#B6F2C5',
    knob: colors.white,
  },
  tab: {
    foreground: '#292834',
    border: '#c6cedc',
    activeBorder: common.palette.primary.main,
  },
  progress: {
    background: colors.skyBlue,
  },
  actionBar: {
    foreground: 'rgba(0, 0, 0, 0.32)',
    selectedForeground: 'rgba(0, 0, 0, 0.6)',
    background: colors.grey,
    border: 'rgba(0, 0, 0, 0.2)',
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
  collapsableSelect: {
    background: colors.lightGrey,
    border: 'rgba(0, 0, 0, 0.2)',
  },
});

export const dark = createTheme({
  ...common,
  palette: {
    ...common.palette,
    text: {
      primary: colors.white,
      secondary: 'rgba(255, 255, 255, 0.6)',
      link: colors.white,
      headingPrimary: colors.skyBlue,
      headingSecondary: colors.white,
    },
    background: {
      default: '#00588b',
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
    foreground: colors.white,
    underline: colors.skyBlue,
  },
  button: {
    background: 'transparent',
    foreground: colors.white,
    foregroundMuted: colors.white,
    border: colors.white,
    backgroundSelected: colors.white,
    fabLabel: colors.white,
    backgroundDisabled: '#9e9e9e',
    foregroundDisabled: 'rgba(0, 0, 0, 0.38)',
  },
  input: {
    background: 'rgba(255, 255, 255, 0.15)',
    foreground: colors.white,
    border: 'rgba(255, 255, 255, 0.5)',
    focusedBorder: 'rgba(255, 255, 255, 0.6)',
  },
  checkbox: {
    background: 'rgba(255, 255, 255, 0.15)',
    foreground: colors.white,
    border: colors.white,
  },
  switch: {
    bar: 'rgba(255, 255, 255, 0.2)',
    barChecked: common.palette.progress.main,
    barCheckedDisabled: '#B6F2C5',
    knob: colors.white,
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
    foreground: 'rgba(0, 0, 0, 0.32)',
    selectedForeground: 'rgba(0, 0, 0, 0.6)',
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(0, 0, 0, 0.2)',
  },
  // TODO: needs tweaking
  popover: {
    headerBackground: '#292834',
    contentBackground: '#292834',
    borderColor: 'rgba(255, 255, 255, 0.15)',
    color: 'rgba(255, 255, 255)',
  },
  dropzone: {
    border: 'rgba(255, 255, 255, 0.6)',
  },
  collapsableSelect: {
    background: 'rgba(255, 255, 255, 0.15)',
    border: 'rgba(255, 255, 255, 0.15)',
  },
});
