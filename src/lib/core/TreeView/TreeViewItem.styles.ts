import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export default (theme: Theme) =>
  createStyles({
    root: {
      '&:hover > $content $label, &:focus > $content $label': {
        backgroundColor: 'transparent',
      },
      '&$selected > $content $label, &$selected > $content $label:hover, &$selected:focus > $content $label': {
        backgroundColor: theme.palette.action.selected,
      },
    },

    isDragging: {
      opacity: 0.4,
    },

    isOver: {
      backgroundColor: theme.palette.action.selected,
    },

    icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconContainer: {
      display: 'none',
    },

    group: {
      marginLeft: 0,
    },

    label: {
      paddingLeft: 0,
    },

    content: {},
    selected: {},
    expanded: {},
  });
