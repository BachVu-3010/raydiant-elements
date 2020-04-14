import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: `${theme.spacing(3)}px ${theme.spacing(6)}px`,
    },
  });

export default styles;
