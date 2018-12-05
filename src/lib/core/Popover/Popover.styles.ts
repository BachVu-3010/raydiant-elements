import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    popover: {
      position: 'absolute',
      overflow: 'hidden', // ensure border radius is respected
      color: theme.popover.color,
      zIndex: theme.zIndex.modal,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.shadow,
      width: `calc(100vw - ${4 * theme.spacing.unit}px)`,
      [theme.breakpoints.up('sm')]: {
        width: '400px',
      },
    },
  });

export default styles;
