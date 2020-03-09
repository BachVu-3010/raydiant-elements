import { createStyles } from '../../../core/withStyles';
import { Theme } from '../../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
    },
    contents: {
      position: 'relative',
      padding: theme.spacing(2),
      borderRadius: theme.borderRadius.sm,
      border: `1px solid ${theme.button.border}`,
    },
    contentsOut: {
      position: 'absolute',
      padding: theme.spacing(2),
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
    },
    clip: {
      overflow: 'hidden',
    },
  });

export default styles;
