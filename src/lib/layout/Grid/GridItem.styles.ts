import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // We need to use padding (instead of margin) so that our grid
      // calculations include the gutter size.
      padding: theme.spacing.unit,
    },
  });

export default styles;
