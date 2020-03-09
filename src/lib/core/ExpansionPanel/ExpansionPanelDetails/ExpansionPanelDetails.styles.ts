import { Theme } from '../../../theme';
import { createStyles } from '../../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.fontSizes.md,

      '& > *': {
        marginTop: '0px',
      },
    },
  });

export default styles;
