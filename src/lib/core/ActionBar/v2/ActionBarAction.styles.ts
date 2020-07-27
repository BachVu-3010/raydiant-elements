import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.actionBar.foreground,
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
      fontSize: theme.fontSizes.xxs,
    },

    labelSelected: {
      color: theme.actionBar.selectedForeground,
    },
  }),
);
