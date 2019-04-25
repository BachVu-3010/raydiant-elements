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

    error: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing.unit * 4,
    },

    border: {
      border: '8px solid #0f0f14',
    },
  });

export default styles;
