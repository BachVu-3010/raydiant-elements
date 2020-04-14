import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.menu.foreground,
      padding: theme.spacing(2),
      fontWeight: 500,
    },
  });

export default styles;
