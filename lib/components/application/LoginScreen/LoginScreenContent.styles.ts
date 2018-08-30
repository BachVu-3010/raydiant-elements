import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      paddingTop: theme.spacing.unit * 10,
      paddingBottom: theme.spacing.unit * 10,
    },
  });

export default styles;
