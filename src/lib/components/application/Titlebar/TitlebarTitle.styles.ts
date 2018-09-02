import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    subtitle: {
      marginLeft: theme.spacing.unit / 2,
      color: theme.palette.text.secondary,
    },
  });

export default styles;
