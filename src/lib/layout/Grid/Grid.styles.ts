import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      padding: theme.spacing.unit * 2,
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
