import { Theme } from '../../../theme';
import { createStyles } from '../../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.fontSizes.md,
    },
  });

export default styles;
