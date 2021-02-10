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
      maxHeight: 212,
      minHeight: 104,
      boxSizing: 'border-box',
      padding: theme.spacing(1),
      ...scrollable(),
    },
    disabled: {
      overflow: 'hidden',
    },
    contentWrapper: {
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.borderRadius.lg,
      boxShadow: `0px 3px 9px ${theme.palette.divider}`,

      '&$withSearch': {
        paddingTop: theme.spacing(1),
      },
    },

    withSearch: {},
  });

export default styles;
