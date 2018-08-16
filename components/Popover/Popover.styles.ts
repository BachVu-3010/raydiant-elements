import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    overlay: {
      position: 'fixed',
      zIndex: 100,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.modal.default.overlayBackground,
    },
    popover: {
      position: 'absolute',
      zIndex: 110,
      borderRadius: 2,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.default.shadow,
    },
  });

export default styles;
