import { createStyles } from '../../core/withStyles';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      ...scrollable(),
    },
  });

export default styles;
