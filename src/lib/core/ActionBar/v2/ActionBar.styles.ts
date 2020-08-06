import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      background: theme.actionBar.background,
      border: `1px solid ${theme.actionBar.border}`,
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.borderRadius.sm,
      height: 32,

      [theme.breakpoints.down('sm')]: {
        height: 48,
        justifyContent: 'space-between',
      },
    },
  }),
);
