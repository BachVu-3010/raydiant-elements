import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    overlay: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.modal.overlayBackground,
    },
  });

export default styles;
