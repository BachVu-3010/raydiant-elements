import { tab } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      position: 'relative',
      ...tab(theme),
    },
    shrink: {
      flexGrow: 0,
    },
    active: {
      fontWeight: 500,

      '&:after': {
        content: '" "',
        position: 'absolute',
        bottom: -1,
        height: 3,
        width: '100%',
        backgroundColor: theme.tab.activeBorder,
      },
    },
    icon: {
      color: theme.tab.foreground,
      margin: `${theme.spacing(1)}px auto`,
    },
    label: {
      color: theme.tab.foreground,
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
      textAlign: 'center',
      whiteSpace: 'nowrap',
    },
    labelNoIcon: {
      fontSize: theme.fontSizes.md,
      fontWeight: 400,

      '$active &': {
        fontWeight: 500,
      },
    },
  });

export default styles;
