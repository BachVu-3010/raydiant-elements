import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex: 1,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  });

export default styles;
