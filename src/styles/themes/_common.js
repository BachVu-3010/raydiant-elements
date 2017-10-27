import purple from '../colors/purple';
import orange from '../colors/orange';
import green from '../colors/green';
import yellow from '../colors/yellow';

const spacing = { unit: 8 };

export const light = {
  text: {
    primary: 'rgba(41, 40, 52, 1)',
    secondary: 'rgba(41, 40, 52, 0.7)',
    disabled: 'rgba(41, 40, 52, 0.5)',
    hint: 'rgba(41, 40, 52, 0.6)',
    icon: 'rgba(41, 40, 52, 0.7)',
    divider: 'rgba(41, 40, 52, 0.2)',
    lightDivider: 'rgba(0, 0, 0, 0.1)',
  },
  input: {
    bottomLine: 'rgba(41, 40, 52, 1)',
    helperText: 'rgba(41, 40, 52, 0.7)',
    labelText: 'rgba(41, 40, 52, 0.7)',
    inputText: 'rgba(41, 40, 52, 1)',
    disabled: 'rgba(41, 40, 52, 0.7)',
  },
  action: {
    active: 'rgba(41, 40, 52, 0.7)',
    disabled: 'rgba(41, 40, 52, 0.7)',
  },
  background: {
    default: '#f3f4f6',
    paper: '#ffffff',
    appBar: '#d8d8d8',
    contentFrame: '#d8d8d8',
  },
};

export const dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 1)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.2)',
    lightDivider: 'rgba(255, 255, 255, 0.1)',
  },
  input: {
    bottomLine: 'rgba(255, 255, 255, 1)',
    helperText: 'rgba(255, 255, 255, 0.7)',
    labelText: 'rgba(255, 255, 255, 0.7)',
    inputText: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 1)',
  },
  background: {
    default: '#303141',
    paper: '#4A4B5B',
    appBar: '#171828',
    contentFrame: '#171828',
  },
};

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
};

// A specific green for Switch that doesn't quite line up
// with the green palette.
const switchGreen = '#4ab559';

// Horizontal margins for text input fields
const inputHSpace = 10;

const breakpoints = {
  breakpointsMap: {
    xs: 480 /* mobile */,
    sm: 768 /* mobile landscape */,
    md: 960 /* tablet */,
    lg: 1280 /* desktop */,
    xl: 1900 /* wide desktop */,
  },
};

export default (type = 'light') => {
  const fontFamily = 'Roboto,Noto,sans-serif';
  const palette = type === 'light' ? light : dark;

  const checkboxPalette =
    type === 'light'
      ? {
          background: '#ffffff',
          backgroundChecked: purple['500'],
          colorChecked: '#ffffff',
        }
      : {
          background: 'rgba(255, 255, 255, 0.15)',
          backgroundChecked: '#ffffff',
          colorChecked: purple['500'],
        };
  const switchPalette =
    type === 'light'
      ? {
          bar: 'rgba(0, 0, 0, 0.2)',
          barChecked: switchGreen,
        }
      : {
          bar: 'rgba(255, 255, 255, 0.2)',
          barChecked: switchGreen,
        };
  const circularProgressPalette =
    type === 'light'
      ? {
          color: purple['500'],
        }
      : {
          color: '#ffffff',
        };

  return {
    breakpoints,
    spacing,
    palette: {
      type,
      ...palette,
      primary: purple,
      accent: green,
      destructive: orange,
      progress: green,
      warning: yellow,
      checkbox: checkboxPalette,
      switch: switchPalette,
      circularProgress: circularProgressPalette,
    },
    typography: {
      fontFamily,
      fontSize: 14,
      display4: {
        fontFamily,
        fontSize: '36px',
        lineHeight: '52px',
        fontWeight: fontWeight.light,
        color: palette.text.secondary,
      },
      display3: {
        fontFamily,
        fontSize: '18px',
        lineHeight: 1.5,
        fontWeight: fontWeight.medium,
        color: palette.text.secondary,
      },
      display2: {
        fontFamily,
        fontSize: '16px',
        lineHeight: 1.5,
        fontWeight: fontWeight.regular,
        color: palette.text.secondary,
      },
      display1: {
        fontFamily,
        fontSize: '14px',
        lineHeight: 1.5,
        fontWeight: fontWeight.regular,
        color: palette.text.secondary,
      },
      headline: {
        fontFamily,
        fontSize: '12px',
        lineHeight: 1.5,
        fontWeight: fontWeight.medium,
        textTransform: 'uppercase',
        color: palette.text.primary,
      },
      title: {
        fontFamily,
        fontSize: '12px',
        lineHeight: 1.5,
        fontWeight: fontWeight.medium,
        textTransform: 'uppercase',
        color: palette.text.primary,
      },
      subheading: {},
      body2: {
        fontFamily,
        fontSize: '14px',
        lineHeight: 1.5,
        fontWeight: fontWeight.regular,
        color: palette.text.primary,
      },
      body1: {
        fontFamily,
        fontSize: '12px',
        lineHeight: 1.5,
        fontWeight: fontWeight.regular,
        color: palette.text.primary,
      },
      caption: {
        fontFamily,
        fontSize: '11px',
        lineHeight: '15px',
        olor: palette.text.secondary,
      },
      button: {
        fontFamily,
        fontSize: 14,
        fontWeight: 500,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          boxSizing: 'border-box',
          minHeight: '40px',
          minWidth: '92px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: palette.text.divider,
          color: palette.text.primary,
          // children are automatically vertically aligned so we don't need vertical padding
          // this allows icons to align with text
          padding: '0 16px',
          lineHeight: '1',
          textTransform: 'none',
        },
        label: {
          '& > *': { marginLeft: `${spacing.unit}px` },
          '& > *:first-child': { marginLeft: '0px' },
        },
        raised: {
          color: palette.text.primary,
          backgroundColor: 'transparent',
          '&:disabled': {
            backgroundColor: 'transparent',
          },
          '&:hover': {
            backgroundColor: palette.text.divider,
            '&:disabled': {
              backgroundColor: 'transparent',
            },
          },
        },
        disabled: {
          color: palette.text.primary,
          opacity: 0.5,
        },
      },
      MuiFormControl: {
        fullWidth: {
          display: 'block',
          width: 'auto',
        },
      },
      MuiInput: {
        root: {
          width: '100%',
          boxSizing: 'border-box',
          background:
            type === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          cursor: 'text',
        },
        input: {
          lineHeight: '18px',
          boxSizing: 'border-box',
          padding: `18px ${inputHSpace}px 4px ${inputHSpace}px`,
        },
        inputSingleline: {
          height: 'auto',
        },
        multiline: { padding: '18px 0 2px 0' },
        inputMultiline: {
          padding: `0 ${inputHSpace}px 2px ${inputHSpace}px`,
        },
        formControl: {
          'label + &': {
            marginTop: 0,
          },
        },
      },
      // The animated labels for TextFields
      MuiInputLabel: {
        formControl: {
          position: 'absolute',
          top: 0,
          left: `${inputHSpace}px`,
          lineHeight: '18px',
          transform: 'translate(0, 18px) scale(1)',
          zIndex: 1,
          pointerEvents: 'none',
        },
        shrink: {
          transform: 'translate(0, 2px) scale(0.75)',
          transformOrigin: 'top left',
        },
      },
      MuiDialog: {
        paper: {
          margin: `${spacing.unit * 3}px`,
          maxHeight: '680px',
          [`@media (max-width:${breakpoints.sm}px)`]: {
            margin: `${spacing.unit * 2}px`,
          },
        },
      },
      MuiSelect: {
        root: {
          lineHeight: '18px',
          boxSizing: 'border-box',
        },
        select: {
          width: '100%',
          height: 'auto',
          padding: `18px ${inputHSpace}px 4px ${inputHSpace}px`,
          '&:focus': {
            background: 'transparent',
          },
        },
        icon: {
          top: '50%',
          marginTop: '-12px',
        },
      },
      MuiSvgIcon: {
        root: {
          verticalAlign: 'middle',
        },
      },
    },
  };
};
