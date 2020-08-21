import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      borderRadius: 100,
    },
    default: {
      color: theme.button.foreground,
      backgroundColor: theme.button.background,
      border: `2px solid ${theme.button.foreground}`,
    },
    error: {
      color: theme.palette.error.main,
      backgroundColor: '#fff',
      borderRadius: 100,
    },
    warning: {
      color: theme.palette.warning.main,
      backgroundColor: '#000',
      borderRadius: 100,
    },
  });

export default styles;
