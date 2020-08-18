import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,

      [theme.breakpoints.up('sm')]: {
        width: 414,
      },
    },

    border: {
      borderLeft: `1px solid ${theme.divider.secondary}`,
    },
  });

export default styles;
