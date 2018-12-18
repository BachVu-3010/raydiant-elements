import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      padding: theme.spacing.unit * 2,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    },

    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: -theme.spacing.unit,
    },

    center: {
      justifyContent: 'space-around',
    },
  });

export default styles;
