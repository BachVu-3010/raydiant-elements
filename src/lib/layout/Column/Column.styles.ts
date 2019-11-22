import { createStyles } from '../../core/withStyles';
import { marginBetweenChildrenVertical } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      ...marginBetweenChildrenVertical(theme.spacing.unit),
      ['& > *']: {
        flexShrink: 0,
      },
    },

    inline: {
      display: 'inline-flex',
      width: 'auto',
    },

    doubleMargin: {
      ...marginBetweenChildrenVertical(theme.spacing.unit * 2),
    },
  });

export default styles;
