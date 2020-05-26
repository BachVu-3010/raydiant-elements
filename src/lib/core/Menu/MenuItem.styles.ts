import { createStyles } from '../../core/withStyles';
import { tab } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...tab(theme),
      position: 'relative',
      color: theme.menu.foreground,
      fontSize: theme.fontSizes.md,
    },

    active: {
      fontWeight: 500,

      '&:after': {
        content: '" "',
        position: 'absolute',
        bottom: 0,
        left: theme.spacing(2),
        right: theme.spacing(2),
        height: 3,
        backgroundColor: theme.menu.foreground,
        borderRadius: theme.borderRadius.md,
      },
    },
  });

export default styles;
