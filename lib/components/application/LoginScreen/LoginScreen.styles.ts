import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    contents: {
      boxSizing: 'border-box',
      width: '100%',
      padding: theme.spacing.unit * 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
      },
    },
    assetContainer: {
      flex: 1,
      backgroundImage: theme.palette.background.gradient,
      padding: theme.spacing.unit * 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    asset: {
      maxWidth: '100%',
    },
  });

export default styles;
