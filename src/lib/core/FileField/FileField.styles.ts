import { buttonReset } from '../../mixins';
import { createStyles } from '../withStyles';

const styles = createStyles({
  root: {
    position: 'relative',
  },
  inputWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  input: {
    position: 'absolute',
    top: -21, // to hide the browse button inside the file
    left: 0,
    width: '100%',
    height: 'calc(3rem + 21px)',
    opacity: 0,
    cursor: 'pointer',
  },
  inputHasValue: {
    width: 'calc(100% - 40px)', // Adjust width to make room for remove button.
  },
  clear: {
    ...buttonReset(),
  },
  disabled: {
    cursor: 'not-allowed',
  },
});

export default styles;
