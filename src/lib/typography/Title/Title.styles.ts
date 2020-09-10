import { createStyles, makeStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.headingPrimary,
      fontSize: theme.fontSizes.xxl,
      fontWeight: 300,
      lineHeight: 1,
      outline: 0,
      border: 0,
      borderBottom: `1px dashed transparent`,
      margin: 0,
    },

    editable: {
      borderBottomColor: theme.input.border,
    },
  }),
);
