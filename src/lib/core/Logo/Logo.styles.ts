import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      width: theme.logo.width,
    },
    square: {
      width: theme.logo.squareWidth,
    },
  });

export default styles;
