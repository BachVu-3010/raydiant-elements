import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
    },

    input: {
      width: '100%',
      backgroundColor: 'transparent',
      border: 0,
      borderBottom: `1px solid ${theme.actionBar.border}`,
      padding: 2,
      borderRadius: 0,
      outline: 'none',
      appearance: 'none',
      fontFamily: theme.typography.fontFamily,
      lineHeight: 1.11,
      letterSpacing: 1.42,
      fontWeight: 600,
      fontSize: theme.fontSizes.xxs,
      color: theme.actionBar.foreground,
      textTransform: 'uppercase',

      '&:focus': {
        borderBottomColor: theme.input.focusedBorder,
      },
    },

    inputWithIcon: {
      paddingRight: 24,
    },

    disabled: {
      boxShadow: 'none',
      cursor: 'not-allowed',
      backgroundColor: 'transparent',
    },

    icon: {
      position: 'absolute',
      top: 0,
      right: 0,
      color: theme.actionBar.foreground,
    },
  }),
);
