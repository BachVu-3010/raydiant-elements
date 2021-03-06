import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: theme.zIndex.fileDropper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.xxl,
      maxWidth: theme.spacing(80),
      padding: theme.spacing(2),
      textAlign: 'center',
    },

    overlay: {
      zIndex: theme.zIndex.fileDropper,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  });

export default styles;
