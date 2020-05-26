import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    isDragging: {
      opacity: 0.4,
    },

    isOver: {
      backgroundColor: theme.palette.action.selected,
      borderRadius: theme.borderRadius.sm,
    },
  });

export default styles;
