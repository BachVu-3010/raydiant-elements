import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      '&:last-child': {
        padding: theme.spacing(2),
      },
    },
  });

export default styles;
