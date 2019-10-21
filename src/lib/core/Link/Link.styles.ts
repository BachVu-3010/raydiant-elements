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
    fullWidth: {
      display: 'block',
      width: '100%',
    },
    active: {
      fontWeight: 500,
    },
    underline: {
      textDecoration: 'underline',
    },
  });

export default styles;
