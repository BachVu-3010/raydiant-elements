import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      flex: 1,
    },

    dropzone: {
      margin: theme.spacing(2),
      padding: theme.spacing(4),
      paddingTop: theme.spacing(0),

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(2),
        margin: theme.spacing(0),
      },
    },

    paddingTop: {
      paddingTop: theme.spacing(4),

      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(0),
      },
    },

    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: -theme.spacing(3),

      [theme.breakpoints.down('xs')]: {
        margin: -theme.spacing(1),
      },
    },

    center: {
      justifyContent: 'space-around',
    },

    isOver: {
      backgroundColor: theme.palette.action.selected,
      borderRadius: theme.borderRadius.sm,
    },

    selection: {
      position: 'absolute',
      pointerEvents: 'none',
      backgroundColor: theme.palette.action.selected,
      opacity: 0.4,
      border: `1px dashed ${theme.palette.action.dropping}`,
    },

    gridItem: {
      padding: theme.spacing(1),
    },
  });

export default styles;
