import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    default: {
      color: theme.progress.background,
    },

    light: {
      color: '#ffffff',
    },

    inherit: {
      color: 'inherit',
    },

    primary: {
      color: theme.palette.primary.main,
    },

    muted: {
      color: theme.palette.text.secondary,
    },

    success: {
      color: theme.palette.progress.main,
    },

    error: {
      color: theme.palette.error.main,
    },
  });

export default styles;
