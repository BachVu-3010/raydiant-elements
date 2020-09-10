import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: 40,
    },

    input: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(1, 2),
      fontSize: theme.fontSizes.md,
      color: theme.input.foreground,
      backgroundColor: theme.input.background,
      border: `1px solid ${theme.input.border}`,
      borderRadius: theme.borderRadius.sm,
      boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)',
      outline: 'none',
      appearance: 'none',
      fontWeight: 400,
      fontFamily: theme.typography.fontFamily,

      '&:focus': {
        borderColor: theme.input.focusedBorder,
      },
    },

    inputWithIcon: {
      paddingRight: 40,
    },

    disabled: {
      boxShadow: 'none',
      cursor: 'not-allowed',
      backgroundColor: 'transparent',

      '&:focus': {
        borderColor: theme.input.border,
      },
    },

    error: {
      borderColor: theme.palette.error.main,

      '&:focus': {
        borderColor: theme.palette.error.main,
      },
    },

    helperText: {
      paddingLeft: theme.spacing(2),
    },

    multiline: {
      minHeight: theme.spacing(16),
    },

    icon: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
  }),
);
