import { createStyles } from '../../core/withStyles';
import { textTruncate } from '../../mixins';
import { Theme } from '../../theme';

export default (theme: Theme) =>
  createStyles({
    root: {
      letterSpacing: 0.29,
      minHeight: 32,
      borderBottom: `1px solid ${theme.palette.action.selected}`,
      padding: theme.spacing(0.5, 1),
      paddingRight: theme.spacing(0.5),
      display: 'flex',
      alignItems: 'center',
    },

    dragging: {
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[1],
    },

    icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    labelText: {
      ...textTruncate(),
      userSelect: 'text',
      flex: 1,
    },

    iconContainer: {
      display: 'none',
    },

    toggleExpand: {
      position: 'relative',
    },

    toggleExpandHitArea: {
      position: 'absolute',
      top: -theme.spacing(0.5),
      bottom: -theme.spacing(0.5),
      left: -theme.spacing(4),
      right: -theme.spacing(0.5),
    },
  });
