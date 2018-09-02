import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit / 2,
      color: theme.input.foregroundMuted,
    },
  });

export default styles;
