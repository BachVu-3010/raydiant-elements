import { createStyles, makeStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
    },

    'size-1': {
      fontSize: theme.fontSizes.xxl,
      lineHeight: 1.09,
      letterSpacing: 0.25,
    },

    'size-2': {
      fontSize: theme.fontSizes.xl,
      lineHeight: 1.09,
      letterSpacing: 0.25,
    },

    'size-3': {
      fontSize: theme.fontSizes.lg,
      lineHeight: 1.09,
      letterSpacing: 0.25,
    },

    'size-4': {
      fontSize: theme.fontSizes.md,
      lineHeight: 1.09,
      letterSpacing: 0.25,
    },

    'size-5': {
      fontSize: theme.fontSizes.sm,
      fontWeight: 600,
      lineHeight: 1.26,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },

    'weight-300': { fontWeight: 300 },
    'weight-400': { fontWeight: 400 },
    'weight-500': { fontWeight: 500 },
    'weight-600': { fontWeight: 600 },
    'weight-700': { fontWeight: 700 },

    default: { color: theme.palette.text.headingSecondary },
    primary: { color: theme.palette.text.headingPrimary },
    muted: { color: theme.palette.text.secondary },

    center: { textAlign: 'center' },

    overline: {
      padding: theme.spacing(0.5, 0),
      borderTop: `1px solid ${theme.divider.secondary}`,
    },

    gutterBottom: { marginBottom: theme.spacing(2) },
    gutterTop: { marginTop: theme.spacing(2) },
  }),
);
