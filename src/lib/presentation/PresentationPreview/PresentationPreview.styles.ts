import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      width: '100%',
      position: 'relative',
    },

    preview: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      background: '#000',
      boxShadow: theme.shadows[1],
      transformOrigin: 'top left',
      overflow: 'hidden',
    },
  });

export default styles;
