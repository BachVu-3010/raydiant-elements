import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      zIndex: theme.zIndex.menu + 10,
    },
    fixed: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
  });

export default styles;
