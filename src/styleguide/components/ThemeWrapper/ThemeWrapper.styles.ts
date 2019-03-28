import { createStyles } from '../../../lib/core/withStyles';

// We can't use theme here because ThemeProvider is a child component.
const styles = createStyles({
  preview: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: [
      'linear-gradient(45deg, rgba(128,128,128,0.05) 25%, transparent 25%)',
      'linear-gradient(135deg, rgba(128,128,128,0.05) 25%, transparent 25%)',
      'linear-gradient(45deg, transparent 75%, rgba(128,128,128,0.05) 75%)',
      'linear-gradient(135deg, transparent 75%, rgba(128,128,128,0.05) 75%)',
    ].join(','),
    backgroundSize: '1em 1em', // must be square
    backgroundPosition: '0 0, 0.5em 0, 0.5em -0.5em, 0px 0.5em', // must be half of background-size
  },
  content: {
    width: '100%',
    overflow: 'scroll',
    padding: 16,
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
