import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      position: 'relative',
      height: 40,
      minWidth: 92,
      fontSize: '1rem',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
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
    },
    buttonWithIconAndLabel: {
      paddingLeft: theme.spacing.unit * 1.5,
    },
    label: {
      fontWeight: 400,
      textTransform: 'none',
      letterSpacing: 0.3,
      whiteSpace: 'nowrap',
    },
    iconWithLabel: {
      marginRight: theme.spacing.unit,
    },
    iconWithLabelFullWidth: {
      position: 'absolute',
      top: 0,
      left: theme.spacing.unit * 1.5,
      height: '100%',
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
