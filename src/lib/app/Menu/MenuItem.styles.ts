import { createStyles } from '../../core/withStyles';
import { tab } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...tab(theme),
      color: theme.palette.primary.contrastText,
    },
    active: {
      borderBottomColor: theme.palette.primary.contrastText,
    },
    drawer: {
      border: 0,
      color: theme.palette.text.primary,
      padding: theme.spacing.unit * 3,
    },
  });

export default styles;
