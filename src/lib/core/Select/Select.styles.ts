import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: 40,

      '&:before, &:after': {
        display: 'none',
      },

      '& $select': {
        paddingRight: theme.spacing(4.5),
      },
    },

    select: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: theme.spacing(0, 2),

      fontSize: theme.fontSizes.md,
      color: theme.input.foreground,
      backgroundColor: theme.palette.background.default,
      border: `1px solid ${theme.input.border}`,
      borderRadius: theme.borderRadius.sm,
      outline: 'none',
      appearance: 'none',
      fontWeight: 400,
      fontFamily: theme.typography.fontFamily,

      '&:focus': {
        borderColor: theme.input.focusedBorder,
        borderRadius: theme.borderRadius.sm,
        backgroundColor: theme.palette.background.default,
      },
    },

    icon: {
      height: '100%',
      top: 0,
      right: theme.spacing(1.5),
    },
  }),
);
