import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export const actionBarHeight = 68;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: actionBarHeight,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,

      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },

    condensed: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },

    autoHeight: {
      height: 'auto',
    },
  });

export default styles;
