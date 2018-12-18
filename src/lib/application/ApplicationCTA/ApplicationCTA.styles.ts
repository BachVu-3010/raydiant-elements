import { createStyles } from '../../core/withStyles';
import { responsiveContainer } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      ...responsiveContainer(theme),
    },

    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: theme.fontSizes.md,
      marginBottom: theme.spacing.unit * 3,

      [theme.breakpoints.up('sm')]: {
        fontSize: theme.fontSizes.lg,
        marginBottom: theme.spacing.unit * 4,
      },
    },

    applications: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing.unit * 2,
      },

      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        '& > *:not(:last-child)': {
          marginBottom: 0,
          marginRight: theme.spacing.unit * 4,
        },
      },
    },

    actions: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing.unit * 3,

      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 4,
      },
    },
  });

export default styles;
