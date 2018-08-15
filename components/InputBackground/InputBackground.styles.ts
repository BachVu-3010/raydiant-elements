import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.input.default.background,
    },
  });

export default styles;
