import { createStyles } from '../../../lib/core/withStyles';
import { Theme } from '../../../lib/theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      width: '100%',
      paddingBottom: 40,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      border: `1px solid #c6cedc`,
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      justifyContent: 'center',
    },
  });

export default styles;
