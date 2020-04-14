import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(16),

      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(24),
      },
      boxShadow: theme.shadows[1],
    },
    inner: {
      position: 'relative',
      paddingTop: `100%`, // Preserve a 1:1 aspect ratio
    },
    image: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#000',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundClip: 'padding-box',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: theme.modal.overlayBackground,
    },
    clickable: {
      cursor: 'pointer',
    },
    topLeft: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
    },
  });

export default styles;
