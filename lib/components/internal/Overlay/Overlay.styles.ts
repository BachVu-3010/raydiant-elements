import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

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
  });

export default styles;
