import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    popover: {
      position: 'absolute',
      zIndex: theme.zIndex.modal,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.default.shadow,
    },
  });

export default styles;
