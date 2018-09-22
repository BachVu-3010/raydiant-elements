import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      boxSizing: 'border-box',
      borderRadius: 100,
    },
    default: {
      fill: theme.button.foreground,
      backgroundColor: theme.button.background,
      border: `2px solid ${theme.button.foreground}`,
    },
    error: {
      fill: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.error.main,
    },
    warning: {
      fill: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.warning.main,
    },
  });

export default styles;
