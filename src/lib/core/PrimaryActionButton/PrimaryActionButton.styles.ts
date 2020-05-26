import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
    },

    label: {
      marginLeft: theme.spacing(1.5),
      fontSize: theme.fontSizes.lg,
      color: theme.button.fabLabel,
      fontWeight: 400,
      letterSpacing: 0.5,
      whiteSpace: 'nowrap',
    },

    default: {
      backgroundColor: theme.button.background,
      color: theme.button.foreground,
      borderColor: theme.button.border,
      '&:disabled, &:disabled:hover': {
        color: theme.button.foregroundMuted,
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
