import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing.unit * 10,
      paddingBottom: theme.spacing.unit * 10,
    },
  });

export default styles;
