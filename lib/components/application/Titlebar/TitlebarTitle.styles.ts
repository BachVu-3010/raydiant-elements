import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    title: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.lg,
      fontWeight: 500,
    },
    subtitle: {
      marginLeft: theme.spacing.unit / 2,
      color: theme.palette.text.secondary,
    },
  });

export default styles;
