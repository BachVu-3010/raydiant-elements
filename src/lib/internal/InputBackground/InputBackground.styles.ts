import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.input.background,
    },
  });

export default styles;
