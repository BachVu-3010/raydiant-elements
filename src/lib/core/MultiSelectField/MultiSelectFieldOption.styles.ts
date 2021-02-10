import { buttonReset } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      boxSizing: 'border-box',
      width: '100%',
      padding: theme.spacing(0, 4),
    },
    disabled: {
      cursor: 'not-allowed',
    },
    checkboxLabel: {
      alignItems: 'flex-start',
    },
  });

export default styles;
