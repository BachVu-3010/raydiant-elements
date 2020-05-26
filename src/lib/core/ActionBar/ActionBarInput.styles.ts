import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import { actionBarHeight } from './ActionBar.styles';

const styles = (theme: Theme) => {
  const textStyles: CSSProperties = {
    lineHeight: 1.11,
    letterSpacing: 1.42,
    fontWeight: 600,
    fontSize: theme.fontSizes.xs,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
  };

  return createStyles({
    root: {
      height: actionBarHeight / 2,
      color: theme.palette.text.secondary,
    },

    input: {
      ...textStyles,
      '&::placeholder': {
        opacity: 1,
        ...textStyles,
      },
    },

    underline: {
      '&:before': {
        borderBottomColor: theme.input.border,
        bottom: 2,
      },
      '&:after': {
        borderBottomColor: theme.input.border,
        bottom: 2,
      },
    },
  });
};

export default styles;
