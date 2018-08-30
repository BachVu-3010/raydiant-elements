import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '33.333%',
      maxWidth: 425,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,

      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxWidth: 'none',
      },
    },
  });

export default styles;
