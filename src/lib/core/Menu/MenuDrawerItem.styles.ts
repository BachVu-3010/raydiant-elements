import { createStyles } from '../../core/withStyles';
import { tab } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...tab(theme),
      alignItems: 'flex-start',
      padding: `${theme.spacing(1.5)}px ${theme.spacing(10)}px`,
      color: theme.menu.foreground,
      border: 0,
    },
    active: {
      fontWeight: 500,
    },
  });

export default styles;
