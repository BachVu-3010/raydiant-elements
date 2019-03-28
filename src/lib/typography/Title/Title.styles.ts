import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.xl,
      fontWeight: 300,
      lineHeight: 1.5,
    },
  });

export default styles;
