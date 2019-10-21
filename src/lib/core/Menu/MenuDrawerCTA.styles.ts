import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 6}px`,
    },
  });

export default styles;
