import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.input.background,
    },
  });

export default styles;
