import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: theme.actionBar.foreground,
      minHeight: 23, // Fix alignment when there is no icon

      '&:hover $label': {
        color: theme.actionBar.selectedForeground,
      },
    },

    fullWidth: {
      width: '100%',
    },

    disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',

      '&:hover $label': {
        color: theme.actionBar.foreground,
      },
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
