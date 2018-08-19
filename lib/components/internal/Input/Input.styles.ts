import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

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
    inputWithIcon: {
      paddingRight: 32,
    },
    iconContainer: {
      position: 'relative',
    },
    icon: {
      position: 'absolute',
      right: 0,
      top: 5,
      padding: 5,
      zIndex: 1,
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
