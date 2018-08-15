import createMuiTheme, {
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    // Custom theme properties.
    button: {
      default: {
        background: string;
        foreground: string;
        foregroundMuted: string;
        border: string;
      };
    };
    input: {
      default: {
        background: string;
        foreground: string;
        foregroundMuted: string;
        border: string;
      };
    };
  }
  interface ThemeOptions {
    // Custom theme options.
    button: {
      default: {
        background: string;
        foreground: string;
        foregroundMuted: string;
        border: string;
      };
    };
    input: {
      default: {
        background: string;
        foreground: string;
        foregroundMuted: string;
        border: string;
      };
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
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
