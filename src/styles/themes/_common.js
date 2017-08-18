import { createPalette, createTypography } from 'material-ui/styles';
import spacing from 'material-ui/styles/spacing';
import purple from '../colors/purple';
import orange from '../colors/orange';
import green from '../colors/green';

// WIP: style radio/checkbox controls per Zeplin
// const selectionControlSize = 20;

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
    palette: {
      ...palette,
      destructive: orange,
      progress: green,
    },
    spacing,
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
          minWidth: '92px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: palette.text.divider,
          color: palette.text.primary,
          padding: '11px 16px',
          lineHeight: '15px',
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
    },
  };
};
