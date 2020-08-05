import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export default (_: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 9999, // Should always be on top
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  });
