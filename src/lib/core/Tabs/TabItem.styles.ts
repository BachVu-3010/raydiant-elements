import { tab } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      ...tab(theme, { border: true }),
    },
    shrink: {
      flexGrow: 0,
    },
    active: {
      borderBottomColor: theme.tab.activeBorder,
    },
    icon: {
      fill: theme.tab.foreground,
      margin: `${theme.spacing.unit}px auto`,
    },
    label: {
      color: theme.tab.foreground,
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
      textAlign: 'center',
    },
    labelNoIcon: {
      fontSize: theme.fontSizes.md,
      fontWeight: 400,
    },
  });

export default styles;
