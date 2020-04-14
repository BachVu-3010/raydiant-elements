import { createStyles } from '../../../core/withStyles';
import { buttonReset } from '../../../mixins';

const styles = () =>
  createStyles({
    root: {
      ...buttonReset(),
    },
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  });

export default styles;
