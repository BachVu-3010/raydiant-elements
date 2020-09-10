import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.link,
      fontSize: 'inherit',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },

    underline: {
      textDecoration: 'underline',
    },

    fullWidth: {
      display: 'block',
      width: '100%',
    },

    active: {
      fontWeight: 500,
    },

    disabled: {
      opacity: 0.5,
      cursor: 'default',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  });

export default styles;
