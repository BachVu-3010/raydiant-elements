import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 1.42,
      lineHeight: 1.11,
      fontSize: theme.fontSizes.xs,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1),
    },

    error: {
      color: theme.palette.error.main,
    },

    disabled: {},
  }),
);
