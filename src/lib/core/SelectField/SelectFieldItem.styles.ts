import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    thumbnail: {
      marginRight: theme.spacing(1),
      height: 20,
      width: 20,
    },
  });

export default styles;
