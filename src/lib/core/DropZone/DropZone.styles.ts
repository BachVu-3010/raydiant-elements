import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export default (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `3px dashed ${theme.dropzone.border}`,
      borderRadius: theme.borderRadius.sm,
      margin: theme.spacing(4),

      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(2),
      },
    },

    isOver: {
      backgroundColor: theme.palette.action.selected,
      borderColor: theme.palette.action.selected,
    },
  });
