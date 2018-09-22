import { buttonReset } from '../../mixins';
import { createStyles } from '../withStyles';

const styles = createStyles({
  root: {
    ...buttonReset(),
    height: '100%',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  noShrink: {
    flexShrink: 0,
  },
});

export default styles;
