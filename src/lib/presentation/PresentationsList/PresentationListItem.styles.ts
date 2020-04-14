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
      padding: theme.spacing(1, 2),
    },
    topLeft: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
    },
    topRight: {
      marginTop: theme.spacing(1),
      flexShrink: 0,
    },
    thumbnail: {
      width: 100,
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
