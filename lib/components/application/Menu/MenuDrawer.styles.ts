import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'none',
      position: 'absolute',
      zIndex: theme.zIndex.drawer,
      top: '100%',
      left: 0,
      right: 0,
      paddingBottom: theme.spacing.unit * 2,

      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    drawer: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.shadow,
    },
  });

export default styles;
