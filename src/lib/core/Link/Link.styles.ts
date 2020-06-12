import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.link,
      textDecoration: 'none',
      fontSize: 'inherit',

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
    disabled: {
      opacity: 0.5,
      cursor: 'default',
      '&:hover': {
        textDecoration: 'none',
      },
    }
  });

export default styles;
