import { createStyles } from '../../core/withStyles';
import { tabContainer } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    header: {
      ...tabContainer(),
      position: 'relative',
      zIndex: theme.zIndex.drawer + 10,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      height: 68,

      [theme.breakpoints.down('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    items: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',

      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    mobile: {
      flex: 1,
      display: 'none',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: theme.spacing.unit * 2,

      [theme.breakpoints.down('xs')]: {
        display: 'flex',
      },
    },
    label: {
      marginRight: theme.spacing.unit * 2,
    },
    overlay: {
      display: 'none',
      zIndex: theme.zIndex.drawer - 10,

      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  });

export default styles;
