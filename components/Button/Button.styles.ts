import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      height: 40,
      minWidth: 92,
      fontSize: '1rem',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      borderRadius: theme.shape.borderRadius,
      border: '1px solid transparent',
    },
    buttonWithIcon: {
      paddingLeft: theme.spacing.unit * 2 - 4,
    },
    buttonOnlyIcon: {
      minWidth: 0,
    },
    label: {
      textTransform: 'none',
      letterSpacing: 0.3,
    },
    iconWithLabel: {
      marginRight: theme.spacing.unit / 2,
    },
    default: {
      backgroundColor: theme.button.default.background,
      color: theme.button.default.foreground,
      borderColor: theme.button.default.border,
      '&:disabled': {
        color: theme.button.default.foregroundMuted,
      },
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '&:disabled': {
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
      '&:disabled': {
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
      '&:disabled': {
        backgroundColor: theme.palette.progress.main,
        color: theme.palette.progress.contrastText,
        opacity: 0.5,
      },
    },
  });

export default styles;