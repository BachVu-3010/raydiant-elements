import { createStyles } from '../../../lib/core/withStyles';

// We can't use theme here because ThemeProvider is a child component.
const styles = createStyles({
  preview: {
    padding: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
