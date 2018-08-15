import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit / 2,
      color: theme.input.default.foregroundMuted,
    },
  });

export default styles;
