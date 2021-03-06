import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  });

export default styles;
