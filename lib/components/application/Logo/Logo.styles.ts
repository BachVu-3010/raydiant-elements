import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      width: theme.logo.width,
    },
  });

export default styles;
