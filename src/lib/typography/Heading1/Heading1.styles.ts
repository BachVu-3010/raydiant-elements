import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.xl,
      fontWeight: 400,
      lineHeight: 1.09,
      letterSpacing: 0.25,
    },
  });

export default styles;
