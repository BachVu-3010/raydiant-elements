import { tabContainer } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...tabContainer(),
      width: '100%',
      border: theme.tab.border ? `1px solid ${theme.tab.border}` : null,
    },
    inline: {
      width: 'auto',
    },
  });

export default styles;
