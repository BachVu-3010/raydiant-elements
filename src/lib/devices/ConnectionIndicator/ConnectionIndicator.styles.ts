import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fill: theme.palette.text.secondary,
      color: theme.palette.text.secondary,
    },
  });

export default styles;
