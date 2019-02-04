import { createStyles } from '../../core/withStyles';
import { textTruncate } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // prevent text selection while drag and dropping
      userSelect: 'none',
      position: 'relative',
      cursor: 'pointer',
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    topLeft: {
      position: 'absolute',
      top: theme.spacing.unit,
      left: theme.spacing.unit,
    },
    topRight: {
      marginTop: theme.spacing.unit,
      flexShrink: 0,
    },
    thumbnail: {
      height: 72,
      width: 128,
      position: 'relative',
      boxShadow: theme.shadows[1],
      flexShrink: 0,
    },
    presentationDetails: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      ...textTruncate(),
    },
    selected: {
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
    },
  });

export default styles;
