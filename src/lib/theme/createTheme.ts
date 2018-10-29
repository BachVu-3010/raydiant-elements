import createMuiTheme, {
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    // Custom theme properties.
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    logo: {
      default: string;
      contrast: string;
      width: number;
    };
    loginAsset: {
      default: string;
    };
    button: {
      background: string;
      foreground: string;
      foregroundMuted: string;
      border: string;
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
  }
  interface ThemeOptions {
    // Custom theme options.
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    logo: {
      default: string;
      contrast: string;
      width: number;
    };
    loginAsset: {
      default: string;
    };
    button: {
      background: string;
      foreground: string;
      foregroundMuted: string;
      border: string;
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
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    gradient: string;
  }

  interface TypeText {
    link: string;
  }

  interface Palette {
    progress: PaletteColor;
    warning: PaletteColor;
  }

  interface PaletteOptions {
    progress: PaletteColorOptions;
    warning: PaletteColorOptions;
  }
}

export { Theme };

export default function createTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
  });
}
