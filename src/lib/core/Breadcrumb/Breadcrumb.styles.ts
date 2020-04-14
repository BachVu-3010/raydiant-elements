import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 20,
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(0.5),
    },
    backIcon: {
      height: '100%',
      width: 16,
      marginLeft: -2, // Compensate for padding in SVG.
      marginRight: theme.spacing(0.5),
    },
    separator: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  });

export default styles;
