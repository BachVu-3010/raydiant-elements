import createMuiTheme, {
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    // Custom theme properties.
    fontFaces: Array<{
      fontFamily: string;
      src: string;
      fontWeight: number;
      fontStyle: string;
    }>;
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    logo: {
      src: string;
      squareSrc: string;
      width: number;
      squareWidth: number;
    };
    loginAsset: {
      default: string;
    };
    menu: {
      background: string;
      foreground: string;
      border: string;
    };
    button: {
      background: string;
      foreground: string;
      foregroundMuted: string;
      border: string;
      backgroundSelected: string;
      fabLabel: string;
    };
    input: {
      background: string;
      foreground: string;
      foregroundMuted: string;
      border: string;
    };
    checkbox: {
      background: string;
      backgroundChecked: string;
      foreground: string;
      border: string;
      borderMuted: string;
    };
    switch: {
      bar: string;
      barChecked: string;
      knob: string;
      knobMuted: string;
      foreground: string;
      foregroundMuted: string;
    };
    modal: {
      overlayBackground: string;
      shadow: string;
    };
    tab: {
      foreground: string;
      border: string;
      activeBorder: string;
    };
    progress: {
      background: string;
    };
    actionBar: {
      border: string;
    };
    popover: {
      headerBackground: string;
      contentBackground: string;
      borderColor: string;
      color: string;
    };
    borderRadius: {
      xs: number;
      sm: number;
      md: number;
    };
    dropzone: {
      border: string;
    };
  }
  interface ThemeOptions {
    // Custom theme options.
    fontFaces: Array<{
      fontFamily: string;
      src: string;
      fontWeight: number;
      fontStyle: string;
    }>;
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    logo: {
      src: string;
      squareSrc: string;
      width: number;
      squareWidth: number;
    };
    loginAsset: {
      default: string;
    };
    menu: {
      background: string;
      foreground: string;
      border: string;
    };
    button: {
      background: string;
      foreground: string;
      foregroundMuted: string;
      border: string;
      backgroundSelected: string;
      fabLabel: string;
    };
    input: {
      background: string;
      foreground: string;
      foregroundMuted: string;
      border: string;
    };
    checkbox: {
      background: string;
      backgroundChecked: string;
      foreground: string;
      border: string;
      borderMuted: string;
    };
    switch: {
      bar: string;
      barChecked: string;
      knob: string;
      knobMuted: string;
      foreground: string;
      foregroundMuted: string;
    };
    modal: {
      overlayBackground: string;
      shadow: string;
    };
    tab: {
      foreground: string;
      border: string;
      activeBorder: string;
    };
    progress: {
      background: string;
    };
    actionBar: {
      border: string;
    };
    popover: {
      headerBackground: string;
      contentBackground: string;
      borderColor: string;
      color: string;
    };
    borderRadius: {
      xs: number;
      sm: number;
      md: number;
    };
    dropzone: {
      border: string;
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    gradient: string;
    inset: string;
  }

  interface TypeText {
    link: string;
    heading: string;
  }

  interface TypeAction {
    dropping: string;
  }

  interface Palette {
    progress: PaletteColor;
    warning: PaletteColor;
  }

  interface PaletteOptions {
    progress: PaletteColorOptions;
    warning?: PaletteColorOptions;
  }
}

declare module '@material-ui/core/styles/zIndex' {
  interface ZIndex {
    shadow: number;
    menu: number;
    modal: number;
    popover: number;
    fileDropper: number;
  }
}

export { Theme };

export default function createTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
    typography: {
      ...options.typography,
    },
  });
}
