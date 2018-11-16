import { createStyles } from '../../core/withStyles';

const styles = () =>
  createStyles({
    root: {
      flex: 1,
      width: '100%',
      position: 'relative',
    },

    preview: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      background: '#000',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
      transformOrigin: 'top left',
      overflow: 'hidden',
    },
  });

export default styles;
