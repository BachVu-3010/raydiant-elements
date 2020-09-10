import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      display: 'flex',
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.text.primary,
    },

    icon: {
      marginTop: 2,
      marginRight: theme.spacing(1),
    },
  });

export default styles;
