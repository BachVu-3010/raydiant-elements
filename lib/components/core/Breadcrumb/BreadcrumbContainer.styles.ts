import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.unit / 2,
    },
    back: {
      flexShrink: 0,
    },
    backIcon: {
      height: '100%',
      width: 16,
      marginLeft: -2, // Compensate for padding in SVG.
      marginRight: theme.spacing.unit / 2,
    },
    separator: {
      marginLeft: theme.spacing.unit / 2,
      marginRight: theme.spacing.unit / 2,
    },
  });

export default styles;
