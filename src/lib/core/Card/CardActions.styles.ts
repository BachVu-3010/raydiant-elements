import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 2,
      '& > *:not(:last-child)': {
        marginRight: theme.spacing.unit,
      },
    },
  });

export default styles;
