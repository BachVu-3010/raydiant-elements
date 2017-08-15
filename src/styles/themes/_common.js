import { createPalette, createTypography } from 'material-ui/styles';
import spacing from 'material-ui/styles/spacing';
import purple from '../colors/purple';
import orange from '../colors/orange';
import green from '../colors/green';

// WIP: style radio/checkbox controls per Zeplin
// const selectionControlSize = 20;

const palette = createPalette({
  primary: purple,
});
const typography = createTypography(palette, {
  fontSize: 14,
  fontFamily: 'Roboto,"Helvetica Neue",Arial,sans-serif',
});
export default {
  palette,
  spacing,
  typography: {
    ...typography,
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
        border: 'solid 1px #c6cedc',
        color: '#292834',
        padding: '11px 16px',
        lineHeight: '15px',
      },
      raised: {
        backgroundColor: 'transparent',
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:hover': {
          backgroundColor: palette.grey[100],
          '&:disabled': {
            backgroundColor: 'transparent',
          },
        },
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
  destructive: orange,
  progress: green,
};
