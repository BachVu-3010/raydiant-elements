import { createStyles } from '../../core/withStyles';
import { marginBetweenChildrenVertical } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: 0, // Fixes an issue where Scrollabe inside Column cause Column to overlow.
      ...marginBetweenChildrenVertical(theme.spacing(1)),
      ['& > *']: {
        flexShrink: 0,
      },
    },
    clickable: {
      cursor: 'pointer',
    },
    inline: {
      display: 'inline-flex',
      width: 'auto',
    },
    doubleMargin: {
      ...marginBetweenChildrenVertical(theme.spacing(2)),
    },
  });

export default styles;
