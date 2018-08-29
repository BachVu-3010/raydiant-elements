import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      lineHeight: 1.5,
      color: theme.palette.text.link,
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  });

export default styles;
