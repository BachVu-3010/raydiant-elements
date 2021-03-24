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
      },
    },

    round: {
      borderRadius: 100,
      boxShadow: theme.shadows[3],

      '& $checkbox': {
        borderRadius: 100,
        border: `2px solid #ffffff`,
        boxShadow:
          'inset 0px 3px 3px -2px rgba(0,0,0,0.2),' +
          'inset 0px 3px 4px 0px rgba(0,0,0,0.14)',
      },

      '&:hover $checkbox': {
        boxShadow:
          'inset 0px 3px 3px -2px rgba(0,0,0,0.2),' +
          'inset 0px 3px 4px 0px rgba(0,0,0,0.14),' +
          'inset 0px 1px 8px 0px rgba(0,0,0,0.12)',
      },

      '& $checkbox$checked': {
        background: '#000000',
        border: 'none',
        boxShadow: 'none',
      },

      '&:hover $checkbox$checked': {
        boxShadow: 'none',
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
      margin: 0,
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },

    checked: {
      background: theme.checkbox.background,
      boxShadow: 'none',

      '&$indeterminate': {
        background: theme.checkbox.foreground,
        width: 24,
        height: 24,
        top: -3,
        left: -3,
        '&:hover': {
          boxShadow: 'none',
        },
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
