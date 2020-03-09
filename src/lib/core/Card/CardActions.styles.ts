import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
  });

export default styles;
