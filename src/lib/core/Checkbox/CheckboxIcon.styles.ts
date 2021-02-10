import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    indeterminate: {},

    icon: {
      fontSize: theme.fontSizes.md,
      color: theme.checkbox.foreground,

      '$round &': {
        color: '#fff',
      },

      '&$indeterminate' : {
        color: theme.checkbox.background,
        width: 24,
        height: 24,
      },
    },
  }),
);
