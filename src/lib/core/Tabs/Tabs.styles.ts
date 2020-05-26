import { tabContainer } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...tabContainer(theme),
      width: '100%',
      borderTop: `1px solid transparent`,
      borderBottom: `1px solid ${theme.palette.action.selected}`,
    },
    inline: {
      width: 'auto',
    },
  });

export default styles;
