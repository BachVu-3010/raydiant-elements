import { createStyles } from '../../core/withStyles';
import { responsiveContainer } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    contents: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...responsiveContainer(theme),
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
