import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    actionBarTitle: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      whiteSpace: 'nowrap',
    },
    subtitle: {
      marginLeft: theme.spacing(0.5),
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
    },
  });

export default styles;
