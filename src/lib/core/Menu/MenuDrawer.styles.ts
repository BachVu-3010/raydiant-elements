import { createStyles } from '../../core/withStyles';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';
import { menuHeaderHeight } from './MenuHeader.styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      zIndex: theme.zIndex.menu,
      top: '100%',
      left: 0,
      right: 0,
      paddingBottom: theme.spacing(2),
      maxHeight: `calc(100vh - ${menuHeaderHeight}px)`,
      ...scrollable(),
    },
    drawer: {
      padding: theme.spacing(3, 0),
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.modal.shadow,
    },
  });

export default styles;
