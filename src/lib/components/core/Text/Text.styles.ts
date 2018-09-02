import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      lineHeight: 1.5,
      color: theme.palette.text.primary,
    },
    muted: {
      color: theme.palette.text.secondary,
    },
    small: {
      fontSize: theme.fontSizes.sm,
    },
  });

export default styles;
