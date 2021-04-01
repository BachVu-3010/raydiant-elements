import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    indeterminate: {},

    icon: {
      color: theme.checkbox.foreground,

      '$round &': {
        color: '#fff',
      },

      '&$indeterminate': {
        color: theme.checkbox.background,
        width: '100%',
        height: '100%',
      },
    },
  }),
);
