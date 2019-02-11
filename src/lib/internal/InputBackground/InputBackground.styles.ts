import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.input.background,
    },
  });

export default styles;
