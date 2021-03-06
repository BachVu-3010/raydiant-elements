import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.lg,
      fontWeight: 400,
      lineHeight: 1.5,
    },
  });

export default styles;
