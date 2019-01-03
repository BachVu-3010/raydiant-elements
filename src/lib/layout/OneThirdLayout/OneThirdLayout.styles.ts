import { createStyles } from '../../core/withStyles';

const styles = createStyles({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    // Fix for FF overflow.
    minHeight: 0,
  },
});

export default styles;
