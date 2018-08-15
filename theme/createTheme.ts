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
    checkbox: {
      default: {
        background: string;
        backgroundChecked: string;
        foreground: string;
        border: string;
        borderMuted: string;
      };
    };
    switch: {
      default: {
        bar: string;
        barChecked: string;
        knob: string;
        knobMuted: string;
        foreground: string;
        foregroundMuted: string;
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
    checkbox: {
      default: {
        background: string;
        backgroundChecked: string;
        foreground: string;
        border: string;
        borderMuted: string;
      };
    };
    switch: {
      default: {
        bar: string;
        barChecked: string;
        knob: string;
        knobMuted: string;
        foreground: string;
        foregroundMuted: string;
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
