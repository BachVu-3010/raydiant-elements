import { createStyles } from '../../core/withStyles';
import { marginBetweenChildrenHorizontal } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      ...marginBetweenChildrenHorizontal(theme.spacing(1)),
    },
    clickable: {
      cursor: 'pointer',
    },
    inline: {
      display: 'inline-flex',
      width: 'auto',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
    },
    halfMargin: {
      ...marginBetweenChildrenHorizontal(theme.spacing(0.5)),
    },
    doubleMargin: {
      ...marginBetweenChildrenHorizontal(theme.spacing(2)),
    },
  });

export default styles;
