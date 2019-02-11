import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 40,
      'label + &': {
        marginTop: 0,
      },
    },
    multiline: {
      // To avoid label overlapping text we need the padding to be on the root
      // element instead of the input when it's a multiline.
      paddingTop: 18,
      height: 'auto',
    },
    input: {
      boxSizing: 'border-box',
      height: '100%',
      padding: '18px 10px 4px 10px',
      color: theme.input.foreground,
      appearance: 'none',

      // Remove the 'x' on search inputs in Chrome.
      '&::-webkit-search-decoration, &::-webkit-search-cancel-button': {
        appearance: 'none',
      },
    },
    inputWithIcon: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: 32,
    },
    inputWithMultiline: {
      paddingTop: 0,
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
        borderBottomLeftRadius: theme.borderRadius.sm,
        borderBottomRightRadius: theme.borderRadius.sm,
        borderBottomColor: theme.input.border,
      },
      '&:after': {
        borderBottomLeftRadius: theme.borderRadius.sm,
        borderBottomRightRadius: theme.borderRadius.sm,
        borderBottomColor: theme.input.border,
      },
    },
  });

export default styles;
