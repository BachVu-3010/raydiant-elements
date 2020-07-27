import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export const menuHeaderHeight = 68;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      color: theme.menu.foreground,
      backgroundColor: theme.palette.background.default,
      borderBottom: '1px solid transparent',
      zIndex: theme.zIndex.menu + 10,
      transition: 'background-color 0.15s ease-in',
      width: '100%',
      padding: theme.spacing(0, 4),

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0),
      },
    },
    shadow: {
      boxShadow: theme.shadows[1],
    },
    inner: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: menuHeaderHeight,
      padding: theme.spacing(0, 2),
    },
  });

export default styles;
