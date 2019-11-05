import { createStyles } from '../../core/withStyles';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    scroll: {
      flex: 1,
      ...scrollable(),
    },

    inputs: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
    },
  });

export default styles;
