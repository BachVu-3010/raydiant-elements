import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    searchBox: {
      height: 64,
      padding: '20px 56px',
      justifyContent: 'space-between',
      margin: theme.spacing(0, 4),
      background: 'transparent',
    },
    checkBox: {
      marginRight: theme.spacing(2),
    },
    searchInputWrapper: {
      display: 'flex',
      height: 34,
    },
    searchInput: {
      '&>input': {
        color: theme.palette.text.primary,
        '&::placeholder': {
          color: theme.palette.text.secondary,
        }
      }
    },
    searchIcon: {
      color: theme.palette.text.primary,
    },
    closeIcon: {
      color: theme.palette.text.primary,
    },
    sortIcon: {
      color: theme.palette.text.primary,
    },
  });

export default styles;
