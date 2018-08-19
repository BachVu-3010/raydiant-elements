import { createStyles } from '../../../lib/components/core/withStyles';

// We can't use theme here because ThemeProvider is a child component.
const styles = createStyles({
  preview: {
    boxSizing: 'border-box',
    display: 'inline-grid',
    gridGap: '16px',
    gridAutoFlow: 'column',
    minWidth: 0,
    padding: 16,
    maxWidth: '100%',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
