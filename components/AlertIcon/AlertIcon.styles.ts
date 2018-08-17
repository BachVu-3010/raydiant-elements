import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      boxSizing: 'border-box',
      borderRadius: 100,
    },
    default: {
      fill: theme.input.default.border,
      backgroundColor: theme.input.default.background,
      border: `2px solid ${theme.input.default.border}`,
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
