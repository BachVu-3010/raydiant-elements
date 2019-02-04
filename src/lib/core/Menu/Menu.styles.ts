import { createStyles } from '../../core/withStyles';
import { tabContainer, textTruncate } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    isCollapsed: {},
    header: {
      ...tabContainer(theme),
      position: 'relative',
      zIndex: theme.zIndex.menu + 10,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      height: 68,

      '$isCollapsed &': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    items: {
      flex: 1,
      display: 'flex',

      '$isCollapsed &': {
        display: 'none',
      },
    },
    collapsed: {
      flex: 1,
      display: 'none',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: theme.spacing.unit * 2,

      '$isCollapsed &': {
        display: 'flex',
      },
    },
    label: {
      marginRight: theme.spacing.unit * 2,
      maxWidth: 160,
      ...textTruncate(),
    },
    overlay: {
      zIndex: theme.zIndex.menu - 10,
    },
  });

export default styles;
