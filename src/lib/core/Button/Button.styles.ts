import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      position: 'relative',
      height: 40,
      fontSize: '1rem',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      borderRadius: theme.borderRadius.sm,
      border: '1px solid transparent',
      flexShrink: 0,
    },
    buttonFullWidth: {
      width: '100%',
      flexShrink: 1,
    },
    buttonOnlyIcon: {
      minWidth: 0,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    buttonWithIconAndLabel: {
      paddingLeft: theme.spacing(2),
    },
    label: {
      fontWeight: 400,
      textTransform: 'none',
      letterSpacing: 0.29,
      fontSize: theme.fontSizes.sm,
      whiteSpace: 'nowrap',
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
    },
    iconWithLabel: {
      marginRight: theme.spacing(1),
    },
    iconWithLabelFullWidth: {
      position: 'absolute',
      top: 0,
      left: theme.spacing(1.5),
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    default: {
      backgroundColor: theme.button.background,
      color: theme.button.foreground,
      borderColor: theme.button.border,

      '&:disabled, &:disabled:hover': {
        backgroundColor: theme.button.background,
        color: theme.button.foreground,
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '&:disabled, &:disabled:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    destructive: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,

      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
      '&:disabled, &:disabled:hover': {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    progress: {
      backgroundColor: theme.palette.progress.main,
      color: theme.palette.progress.contrastText,

      '&:hover': {
        backgroundColor: theme.palette.progress.dark,
      },
      '&:disabled, &:disabled:hover': {
        backgroundColor: theme.palette.progress.main,
        color: theme.palette.progress.contrastText,
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    hideBorder: {
      border: 0,

      '&:hover': {
        border: 0,
      },
      '&:disabled, &:disabled:hover': {
        border: 0,
      },
    },
  });

export default styles;
