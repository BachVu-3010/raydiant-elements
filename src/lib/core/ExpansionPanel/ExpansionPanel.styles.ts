import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    expansionPanel: {
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.borderRadius.xs,
      [theme.breakpoints.up('sm')]: {
        borderRadius: theme.borderRadius.md,
      },
    },
  });

export default styles;
