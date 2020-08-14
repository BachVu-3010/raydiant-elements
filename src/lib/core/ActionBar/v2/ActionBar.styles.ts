import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

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
        paddingLeft: theme.spacing(1.5),
      },

      '& > :not(:last-child)': {
        paddingRight: theme.spacing(1.5),
      },
    },
  }),
);
