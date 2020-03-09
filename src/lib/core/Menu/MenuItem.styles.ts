import { createStyles } from '../../core/withStyles';
import { tab } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...tab(theme),
      color: theme.menu.foreground,
      fontSize: theme.fontSizes.md,
    },
    active: {
      fontWeight: 500,
    },
  });

export default styles;
