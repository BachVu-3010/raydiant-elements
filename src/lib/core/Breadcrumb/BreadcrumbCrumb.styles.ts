import { buttonReset, textTruncate } from '../../mixins';
import { createStyles } from '../withStyles';
import { Theme } from '../../theme';

const styles = (_: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      ...textTruncate(),
      height: '100%',
    },
    noShrink: {
      flexShrink: 0,
    },
  });

export default styles;
