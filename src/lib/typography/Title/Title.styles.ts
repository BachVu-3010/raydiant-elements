import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.xl,
      marginTop: theme.spacing(2),
      fontWeight: 300,
      lineHeight: 1.25,
      outline: 0,
      border: 0,
      borderBottom: `1px dashed transparent`,
    },

    editable: {
      borderBottomColor: theme.input.border,
    },
  });

export default styles;
