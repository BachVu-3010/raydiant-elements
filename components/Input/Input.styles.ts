import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: 0,
      },
    },
    input: {
      boxSizing: 'border-box',
      height: '100%',
      padding: '18px 10px 4px 10px',
      color: theme.input.default.foreground,
    },
    disabled: {
      color: theme.input.default.foregroundMuted,
    },
    underline: {
      '&:before': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        borderBottomColor: theme.input.default.border,
      },
      '&:after': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        borderBottomColor: theme.input.default.border,
      },
    },
  });

export default styles;
