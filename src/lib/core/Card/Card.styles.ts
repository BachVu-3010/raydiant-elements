import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.borderRadius.xs,
      [theme.breakpoints.up('sm')]: {
        borderRadius: theme.borderRadius.md,
      },
    },
    fullWidth: {
      width: '100%',
    },
  });

export default styles;
