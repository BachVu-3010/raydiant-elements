import { createStyles } from '../../core/withStyles';
import { responsiveContainer } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      ...responsiveContainer(theme),
    },
  });

export default styles;
