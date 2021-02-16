import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';
import { actionBarHeight } from '../ActionBar.styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      background: theme.actionBar.background,
      border: `1px solid ${theme.actionBar.border}`,
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.borderRadius.sm,
      height: 32,

      [theme.breakpoints.down('sm')]: {
        height: 40,
        justifyContent: 'space-between',
      },

      '& > :not(:first-child)': {
        marginLeft: theme.spacing(1.5),
      },

      '& > :not(:last-child)': {
        marginRight: theme.spacing(1.5),
      },
    },

    footer: {
      height: actionBarHeight, // Remove when the v1 ActionBar is deprecated
      borderRadius: 0,
      borderLeft: 0,
      borderRight: 0,
      borderBottom: 0,
      justifyContent: 'space-around',
      padding: theme.spacing(1, 2),
    },
  }),
);
