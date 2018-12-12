import { buttonReset } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      boxSizing: 'border-box',
      width: '100%',
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    disabled: {
      cursor: 'not-allowed',
    },
  });

export default styles;
