import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 40,
      'label + &': {
        marginTop: 0,
      },
    },
    input: {
      boxSizing: 'border-box',
      height: '100%',
      padding: '18px 10px 4px 10px',
      color: theme.input.foreground,
    },
    inputWithIcon: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: 32,
    },
    iconContainer: {
      position: 'relative',
    },
    icon: {
      opacity: 0.7,
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      padding: 10,
      zIndex: 1,
    },
    disabled: {
      color: theme.input.foregroundMuted,
    },
    underline: {
      '&:before': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        borderBottomColor: theme.input.border,
      },
      '&:after': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        borderBottomColor: theme.input.border,
      },
    },
  });

export default styles;
