import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    items: {
      boxSizing: 'border-box',
      // A magic number so we partially show the 3rd item to indicate that
      // the user can scroll.
      height: 104,
      padding: `${theme.spacing.unit}px 0px`,
      backgroundColor: theme.palette.background.inset,
      borderRadius: theme.shape.borderRadius,
      boxShadow: 'inset 0px 1px 5px rgba(0, 0, 0, 0.2)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    },
    label: {
      fontSize: theme.fontSizes.sm,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing.unit / 2,
    },
    disabled: {
      overflow: 'hidden',
    },
    error: {
      color: theme.palette.error.main,
    },
  });

export default styles;