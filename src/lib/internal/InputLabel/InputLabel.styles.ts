import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      left: 10,
      transform: 'translate(0, 14px) scale(1)',
      color: theme.input.foregroundMuted,

      '&$focused': {
        color: theme.input.foreground,
      },
      '&$disabled': {
        color: theme.input.foregroundMuted,
      },
      '&$error': {
        color: theme.palette.error.main,
      },
    },
    focused: {},
    error: {},
    disabled: {},
    shrink: {
      transform: 'translate(0, 4px) scale(0.8)',
    },
  });

export default styles;
