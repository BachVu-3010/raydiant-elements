import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    popoverContainer: {
      position: 'fixed',
      zIndex: theme.zIndex.popover,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },

    popover: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: 400,
      position: 'relative',
      zIndex: theme.zIndex.popover,
      overflow: 'hidden',
      color: theme.popover.color,
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.shadow,

      [theme.breakpoints.up('md')]: {
        width: 400,
        position: 'absolute',
      },
    },

    autoWidth: {
      width: 'auto',
      maxWidth: 'none',

      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },

    autoHeight: {
      maxHeight: 'none',
    },

    overlay: {
      zIndex: theme.zIndex.popover,
    },
  });

export default styles;
