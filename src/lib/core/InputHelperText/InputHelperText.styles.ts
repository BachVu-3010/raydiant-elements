import { createStyles } from '../withStyles';
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
    },

    error: {},

    indent: {
      paddingLeft: theme.spacing(2),
    },
  });

export default styles;
