import { buttonReset } from '../../mixins';
import { createStyles } from '../withStyles';

const styles = createStyles({
  root: {
    position: 'relative',
  },
  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '3rem',
    opacity: 0,
    cursor: 'pointer',
  },
  clear: {
    ...buttonReset(),
  },
});

export default styles;
