import { createStyles } from '../../core/withStyles';
import { textTruncate } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(18),

      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(24),
      },
    },

    thumbnail: {
      boxShadow: theme.shadows[3],
    },

    name: {
      marginTop: theme.spacing(1),
      fontSize: theme.fontSizes.sm,
      textAlign: 'center',
      ...textTruncate(),
    },

    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  });

export default styles;
