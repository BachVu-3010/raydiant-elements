import { createPalette, createTypography, createBreakpoints } from 'material-ui/styles';
import spacing from 'material-ui/styles/spacing';
import purple from '../colors/purple';
import orange from '../colors/orange';
import green from '../colors/green';

// WIP: style radio/checkbox controls per Zeplin
// const selectionControlSize = 20;

const inputVSpace = 6;
const inputHSpace = 10;

const breakpointsDfn = {
  breakpointsMap: {
    xs: 480, /* mobile */
    sm: 768, /* mobile landscape */
    md: 960, /* tablet */
    lg: 1280, /* desktop */
    xl: 1900, /* wide desktop */
  },
};
const breakpoints = createBreakpoints(breakpointsDfn.breakpointsMap);

export default (type = 'light') => {
  const fontFamily = 'Roboto,Noto,sans-serif';

  const palette = createPalette({
    type,
    primary: purple,
  });
  const typography = createTypography(palette, {
    fontFamily,
    fontSize: 14,
  });
  return {
    breakpoints,
    spacing,
    palette: {
      ...palette,
      destructive: orange,
      progress: green,
    },
    typography: {
      ...typography,
      display4: {
        fontFamily,
        fontSize: '36px',
        lineHeight: '52px',
        fontWeight: typography.fontWeightLight,
        color: palette.text.secondary,
      },
      display3: {
        fontFamily,
        fontSize: '18px',
        lineHeight: 1.5,
        fontWeight: typography.fontWeightMedium,
        color: palette.text.secondary,
      },
      display2: {
        fontFamily,
        fontSize: '16px',
        lineHeight: 1.5,
        fontWeight: typography.fontWeightRegular,
        color: palette.text.secondary,
      },
      display1: {
        fontFamily,
        fontSize: '14px',
        lineHeight: 1.5,
        fontWeight: typography.fontWeightRegular,
        color: palette.text.secondary,
      },
      headline: {
        fontFamily,
        fontSize: '12px',
        lineHeight: 1.5,
        fontWeight: typography.fontWeightMedium,
        textTransform: 'uppercase',
        color: palette.text.primary,
      },
      title: {
        fontFamily,
        fontSize: '12px',
        lineHeight: 1.5,
        fontWeight: typography.fontWeightMedium,
        textTransform: 'uppercase',
        color: palette.text.primary,
      },
      subheading: {},
      body2: {
        fontFamily,
        fontSize: '14px',
        lineHeight: 1.5,
        fontWeight: typography.fontWeightRegular,
        color: palette.text.primary,
      },
      body1: {
        fontFamily,
        fontSize: '12px',
        lineHeight: 1.5,
        fontWeight: typography.fontWeightRegular,
        color: palette.text.primary,
      },
      caption: {
        fontFamily,
        fontSize: '11px',
        lineHeight: '15px',
        olor: palette.text.secondary,
      },
      button: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: typography.fontFamily,
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
          padding: '12px 16px', /* 40px high -> 14px text + 2*12 padding + 2*1px border */
          lineHeight: '1',
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
      MuiIconButton: {
        // WIP: style radio/checkbox controls per Zeplin
        // root: {
        //   width: 40,
        //   height: 40,
        // },
      },
      MuiSwitchBase: {
        // WIP: style radio/checkbox controls per Zeplin
        // input: {
        //   height: selectionControlSize,
        //   width: selectionControlSize,
        // },
      },
      MuiFormControl: {
        fullWidth: {
          display: 'block',
          width: 'auto',
        },
      },
      MuiFormControlLabel: {
        root: {
          fontSize: 14,
        },
        hasLabel: {
          // WIP: style radio/checkbox controls per Zeplin
          // marginLeft: 0,
          // marginRight: spacing.unit,
        },
      },
      MuiInput: {
        root: {
          width: '100%',
          background: (type === 'dark') ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        },
        input: {
          padding: `${inputVSpace}px ${inputHSpace}px`,
          lineHeight: '18px',
          boxSizing: 'border-box',
        },
        inputSingleline: {
          height: 'auto',
        },
        multiline: {
          padding: `${inputVSpace}px ${inputHSpace}px`,
        },
        formControl: {
          'label + &': {
            marginTop: 0,
          },
          'label + & > input, label + & > div': {
            marginTop: `${inputVSpace * 2}px`,
          },
        },
      },
      // The animated labels for TextFields
      MuiInputLabel: {
        formControl: {
          position: 'absolute',
          left: 0,
          top: 0,
          transform: `translate(0, ${inputVSpace * 3}px) scale(1)`,
        },
        shrink: {
          transform: 'translate(0, 4px) scale(0.75)',
          transformOrigin: 'top left',
        },
      },
      MuiDialog: {
        paper: {
          margin: `${spacing.unit * 3}px`,
          maxHeight: '680px',
          [breakpoints.down('sm')]: {
            margin: `${spacing.unit * 2}px`,
          },
        },
      },
    },
  };
};
