import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    input: {
      position: 'relative',
      width: '100%',
      color: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      backgroundColor: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 'inherit',
      outline: 0,
      border: 0,
      padding: 0,
      borderBottom: `1px dashed ${theme.input.border}`,

      '&:focus': {
        borderBottom: `1px dashed ${theme.input.focusedBorder}`,
      },
    },
  });

export default styles;
