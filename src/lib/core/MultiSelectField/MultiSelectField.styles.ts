import { scrollable } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    items: {
      // A magic number so we partially show the 3rd item to indicate that
      // the user can scroll.
      height: 104,
      boxSizing: 'border-box',
      padding: theme.spacing(1, 0),
      backgroundColor: theme.palette.background.inset,
      borderRadius: theme.borderRadius.sm,
      boxShadow: 'inset 0px 1px 5px rgba(0, 0, 0, 0.2)',
      ...scrollable(),
    },
    label: {
      fontSize: theme.fontSizes.sm,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(0.5),
    },
    disabled: {
      overflow: 'hidden',
    },
    error: {
      color: theme.palette.error.main,
    },
  });

export default styles;
