import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    select: {
      width: '100%',
      boxSizing: 'border-box',
      paddingRight: 32,
      '&:focus': {
        color: theme.input.default.foreground,
        backgroundColor: 'transparent',
      },
    },
  });

export default styles;
