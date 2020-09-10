import { createStyles, makeStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      fontSize: theme.fontSizes.sm,
      fontWeight: 600,
      lineHeight: 1.26,
      letterSpacing: 2,
      textTransform: 'uppercase',
      marginTop: 0,
      marginBottom: theme.spacing(2),
    },

    overline: {
      padding: theme.spacing(0.5, 0),
      borderTop: `1px solid ${theme.divider.secondary}`,
    },
  }),
);
