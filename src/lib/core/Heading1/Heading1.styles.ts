import { textTruncate } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.lg,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    textTruncate: { ...textTruncate() },
  });

export default styles;
