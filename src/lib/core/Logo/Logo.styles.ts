import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      width: theme.logo.width,
    },
  });

export default styles;
