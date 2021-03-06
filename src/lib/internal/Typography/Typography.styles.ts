import { createStyles } from '../../core/withStyles';
import { textTruncate } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      lineHeight: 'inherit',
      color: 'inherit',
      marginTop: 0,
      marginBottom: 0,
    },
    muted: {
      color: theme.palette.text.secondary,
    },
    xxsmall: {
      fontSize: theme.fontSizes.xxs,
    },
    xsmall: {
      fontSize: theme.fontSizes.xs,
    },
    small: {
      fontSize: theme.fontSizes.sm,
    },
    medium: {
      fontSize: theme.fontSizes.md,
    },
    large: {
      fontSize: theme.fontSizes.lg,
    },
    xlarge: {
      fontSize: theme.fontSizes.xl,
    },
    xxlarge: {
      fontSize: theme.fontSizes.xxl,
    },
    xxxlarge: {
      fontSize: theme.fontSizes.xxxl,
    },
    bold: {
      fontWeight: 500,
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
