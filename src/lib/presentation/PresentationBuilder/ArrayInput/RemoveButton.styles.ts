import { createStyles } from '../../../core/withStyles';
import { buttonReset } from '../../../mixins';

const styles = () =>
  createStyles({
    root: {
      ...buttonReset(),
    },
  });

export default styles;
