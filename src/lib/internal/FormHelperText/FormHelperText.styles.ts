import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      lineHeight: 1.5,
      marginTop: theme.spacing(0.5),
      color: theme.input.foregroundMuted,

      '&$error': {
        color: theme.palette.text.primary,
      },
    },

    error: {},
  });

export default styles;
