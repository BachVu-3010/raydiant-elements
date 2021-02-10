import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    inputContainer: {
      position: 'relative',
      width: 18,
      height: 18,
      flexShrink: 0,
      background: 'transparent',

      '&:hover $checkbox': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.checkbox.background}`,
      },

      '&:hover $checkbox$disabled': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.checkbox.border}`,
      },

      '&:hover $checkbox$disabled&checked': {
        boxShadow: 'none',
      },

      '&$indeterminate': {
        background: theme.palette.background.default,
        overflow: 'hidden',
        borderRadius: 2,
      }
    },

    round: {
      borderRadius: 100,

      '&:hover $checkbox': {
        boxShadow: `inset 0px 0px 0px 2px #ffffff`,
      },
      '&:hover $checkbox$checked': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.palette.progress.dark}`,
      },

      '&:hover $checkbox$disabled': {
        boxShadow: `inset 0px 0px 0px 2px #f6f6f6`,
      },
      '&:hover $checkbox$disabled$checked': {
        boxShadow: `inset 0px 0px 0px 2px ${theme.palette.progress.main}`,
      },
    },

    small: {
      width: 14,
      height: 14,
    },

    labelContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
      overflow: 'hidden', // To allow for text ellipsis

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
      overflow: 'hidden', // To allow for text ellipsis
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

      '$round &': {
        borderRadius: 100,
        boxShadow: `inset 0px 0px 0px 2px #fff`,
      },
    },

    checked: {
      background: theme.checkbox.background,
      boxShadow: 'none',

      '$round &': {
        background: theme.palette.progress.main,
        boxShadow: `inset 0px 0px 0px 2px ${theme.palette.progress.main}`,
      },

      '&$indeterminate' : {
        background: theme.checkbox.foreground,
        width: 24,
        height: 24,
        top: -3,
        left: -3,
        '&:hover': {
          boxShadow: 'none',
        }
      },
    },

    indeterminate: {},

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
