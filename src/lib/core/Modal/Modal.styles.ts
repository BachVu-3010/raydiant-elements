import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },

    modal: {
      position: 'relative',
      zIndex: theme.zIndex.modal + 10,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      maxWidth: theme.modal.maxWidth || 1020,
      maxHeight: theme.modal.maxHeight || 672,
      fontFamily: theme.typography.fontFamily,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRadius: theme.borderRadius.md,
      boxShadow: theme.modal.shadow,
    },

    overlay: {
      zIndex: theme.zIndex.modal,
    },
  });

export default styles;
