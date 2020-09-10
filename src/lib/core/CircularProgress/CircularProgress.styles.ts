import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.progress.background,
    },

    light: {
      color: '#ffffff',
    },
  });

export default styles;
