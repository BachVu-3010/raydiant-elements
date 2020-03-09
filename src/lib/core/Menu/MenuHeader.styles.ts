import { createStyles } from '../../core/withStyles';
import { tabContainer } from '../../mixins';
import { Theme } from '../../theme';

export const menuHeaderHeight = 68;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      backgroundColor: theme.menu.background,
      color: theme.menu.foreground,
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',
      zIndex: theme.zIndex.menu + 10,
      transition: 'background-color 0.15s ease-in',
      width: '100%',
    },
    border: {
      borderBottomColor: theme.menu.border,
    },
    shadow: {
      boxShadow: theme.shadows[1],
    },
    inner: {
      ...tabContainer(theme),
      height: menuHeaderHeight,
      background: 'transparent',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      flexDirection: 'row',
      alignItems: 'center',
      margin: '0 auto',
    },
  });

export default styles;
