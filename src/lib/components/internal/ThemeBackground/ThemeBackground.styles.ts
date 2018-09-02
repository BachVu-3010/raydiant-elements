import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      width: '100%',
    },
  });

export default styles;
