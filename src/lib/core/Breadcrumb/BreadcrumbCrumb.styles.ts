import { buttonReset, textTruncate } from '../../mixins';
import { createStyles } from '../withStyles';

const styles = createStyles({
  root: {
    ...buttonReset(),
    height: '100%',
    fontWeight: 'bold',
    ...textTruncate(),
  },
  noShrink: {
    flexShrink: 0,
  },
});

export default styles;
