import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    popover: {
      position: 'absolute',
      overflow: 'hidden', // ensure border radius is respected
      width: '400px',
      color: theme.popover.color,
      zIndex: theme.zIndex.modal,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.shadow,
    },
  });

export default styles;
