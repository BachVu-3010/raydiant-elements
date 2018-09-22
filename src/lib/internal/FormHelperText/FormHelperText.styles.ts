import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit / 2,
      color: theme.input.foregroundMuted,
    },
  });

export default styles;
