import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    default: {
      color: theme.progress.background,
    },

    light: {
      color: '#ffffff',
    },

    inherit: {
      color: 'inherit',
    },
  });

export default styles;
