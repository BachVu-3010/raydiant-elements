import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    inputContainer: {
      position: 'relative',
      width: 18,
      height: 18,

      '&:hover $checkbox': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.checkbox.background}`,
      },

      '&:hover $checkbox$disabled': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.checkbox.border}`,
      },

      '&:hover $checkbox$disabled&checked': {
        boxShadow: 'none',
      },
    },

    labelContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      '&:hover $checkbox': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.checkbox.background}`,
      },

      '&:hover $checkbox$disabled': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.checkbox.border}`,
      },

      '&:hover $checkbox$disabled&checked': {
        boxShadow: 'none',
      },
    },

    label: {
      marginLeft: theme.spacing(1),
    },

    input: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      cursor: 'pointer',
    },

    checkbox: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      borderRadius: theme.borderRadius.xs,
      background: 'transparent',
      boxShadow: `inset 0px 0px 0px 2px ${theme.checkbox.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },

    checked: {
      background: theme.checkbox.background,
      boxShadow: 'none',
    },

    icon: {
      fontSize: theme.fontSizes.md,
      color: theme.checkbox.foreground,
    },

    disabled: {
      opacity: 0.5,

      '& $checkbox': {
        cursor: 'not-allowed',
      },
      '& $input': {
        cursor: 'not-allowed',
      },
    },
  }),
);
