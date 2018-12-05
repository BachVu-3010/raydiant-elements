import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.progress.contrastText,
      backgroundColor: theme.palette.progress.main,
      borderRadius: 100,
    },
  });

export default styles;
