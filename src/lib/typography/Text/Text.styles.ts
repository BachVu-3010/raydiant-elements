import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    input: {
      width: '100%',
      color: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      backgroundColor: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 1.25,
      outline: 0,
      border: 0,
      borderBottom: `1px dashed ${theme.input.border}`,

      '&:focus': {
        borderBottom: `1px dashed ${theme.input.focusedBorder}`,
      },
    },
  });

export default styles;
