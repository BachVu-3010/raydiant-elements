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
        width: '33.333%',
        minWidth: 324,
        maxWidth: 425,
      },
    },
  });

export default styles;
