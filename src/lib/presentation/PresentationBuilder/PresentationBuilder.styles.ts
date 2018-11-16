import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    scroll: {
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    },

    inputs: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
    },

    title: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 3,
    },
  });

export default styles;
