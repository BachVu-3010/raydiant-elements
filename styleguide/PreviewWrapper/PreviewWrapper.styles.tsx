import { createStyles } from '../../components/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%',
      paddingBottom: 40,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      border: `1px solid ${theme.button.default.border}`,
      borderRadius: theme.shape.borderRadius,
    },
  });

export default styles;
