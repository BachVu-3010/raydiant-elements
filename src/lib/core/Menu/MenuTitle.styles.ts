import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.menu.foreground,
      fontSize: theme.fontSizes.sm,
      padding: theme.spacing(2),
    },
  });

export default styles;
