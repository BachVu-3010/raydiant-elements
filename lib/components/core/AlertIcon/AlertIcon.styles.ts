import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      boxSizing: 'border-box',
      borderRadius: 100,
    },
    default: {
      fill: theme.button.default.foreground,
      backgroundColor: theme.button.default.background,
      border: `2px solid ${theme.button.default.foreground}`,
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
