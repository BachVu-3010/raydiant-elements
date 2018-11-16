import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.link,
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  });

export default styles;
