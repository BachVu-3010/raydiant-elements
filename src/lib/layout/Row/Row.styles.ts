import { createStyles } from '../../core/withStyles';
import { marginBetweenChildrenHorizontal } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      ...marginBetweenChildrenHorizontal(theme.spacing.unit),
    },

    inline: {
      display: 'inline-flex',
      width: 'auto',
    },
  });

export default styles;
