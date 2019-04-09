import { createStyles } from '../../core/withStyles';
import { textTruncate } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      lineHeight: 1.5,
      color: theme.palette.text.primary,
      marginTop: 0,
      marginBottom: 0,
    },
    muted: {
      color: theme.palette.text.secondary,
    },
    small: {
      fontSize: theme.fontSizes.sm,
    },
    medium: {
      fontSize: theme.fontSizes.md,
    },
    center: {
      textAlign: 'center',
    },
    strikethrough: {
      textDecoration: 'line-through',
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
    ellipsis: { ...textTruncate() },
  });

export default styles;
