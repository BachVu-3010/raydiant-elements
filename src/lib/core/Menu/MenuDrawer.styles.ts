import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      zIndex: theme.zIndex.drawer,
      top: '100%',
      left: 0,
      right: 0,
      paddingBottom: theme.spacing.unit * 2,
    },
    drawer: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.shadow,
    },
  });

export default styles;
