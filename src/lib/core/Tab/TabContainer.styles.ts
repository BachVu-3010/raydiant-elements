import { tabContainer } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...tabContainer(),
      width: '100%',
      boxShadow: theme.tab.border ? `inset 0 -1px 0 0 ${theme.tab.border}` : '',
    },
  });

export default styles;
