import { buttonReset } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      boxSizing: 'border-box',
      width: '100%',
      padding: theme.spacing(1, 2),
    },
    disabled: {
      cursor: 'not-allowed',
    },
  });

export default styles;
