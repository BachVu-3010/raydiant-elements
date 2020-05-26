import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    selected: {
      backgroundColor: theme.palette.action.selected,
    },
  });

export default styles;
