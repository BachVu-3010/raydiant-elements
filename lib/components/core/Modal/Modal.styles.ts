import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: theme.typography.fontFamily,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.modal.default.shadow,
      margin: theme.spacing.unit * 3,
    },
  });

export default styles;
