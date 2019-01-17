import { createStyles } from '../../core/withStyles';

const styles = createStyles({
  root: {
    flex: 1,
    display: 'flex',
    // Fix for FF overflow.
    minHeight: 0,
  },
});

export default styles;
