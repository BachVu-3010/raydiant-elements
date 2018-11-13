import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      boxSizing: 'border-box',
      borderRadius: 100,
    },
    default: {
      color: theme.button.foreground,
      backgroundColor: theme.button.background,
      border: `2px solid ${theme.button.foreground}`,
    },
    error: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
    },
    warning: {
      color: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.warning.main,
    },
  });

export default styles;
