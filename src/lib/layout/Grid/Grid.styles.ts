import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
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
