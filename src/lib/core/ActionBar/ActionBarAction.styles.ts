import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import { actionBarHeight } from './ActionBar.styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      padding: theme.spacing(1, 0),
      height: actionBarHeight / 2,
    },

    disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },

    label: {
      marginLeft: theme.spacing(0.8),
      fontWeight: 700,
      lineHeight: 1.11,
      letterSpacing: 1.42,
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.xs,
    },

    labelSelected: {
      color: theme.palette.text.primary,
    },

    subActionLabel: {
      marginLeft: 0,
      marginRight: theme.spacing(0.4),
    },
  });

export default styles;
