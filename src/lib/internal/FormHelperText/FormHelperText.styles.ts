import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      lineHeight: 1.5,
      marginTop: theme.spacing(0.5),
      fontSize: theme.fontSizes.xs,
      color: theme.palette.text.secondary,

      '&$error': {
        color: theme.palette.error.main,
      },

      '& a': {
        color: theme.palette.text.secondary,
      },
    },

    error: {},
  });

export default styles;
