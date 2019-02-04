import { createStyles } from '../../core/withStyles';
import { textTruncate } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing.unit * 16,

      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 24,
      },
    },

    thumbnail: {
      boxShadow: theme.shadows[1],
    },

    name: {
      marginTop: theme.spacing.unit,
      fontSize: theme.fontSizes.sm,
      textAlign: 'center',
      ...textTruncate(),
    },
  });

export default styles;
