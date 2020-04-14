import { createStyles } from '../../core/withStyles';
import { responsiveContainer, scrollable } from '../../mixins';
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
      ...scrollable(),
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
      fontSize: theme.fontSizes.lg,
      marginBottom: theme.spacing(4),
    },

    applications: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },

      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        '& > *:not(:last-child)': {
          marginBottom: 0,
          marginRight: theme.spacing(4),
        },
      },
    },

    actions: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(3),

      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(4),
      },
    },
  });

export default styles;
