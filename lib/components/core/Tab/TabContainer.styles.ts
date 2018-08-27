import { tabContainer } from '../../../mixins';
import { createStyles } from '../withStyles';

const styles = createStyles({
  root: {
    ...tabContainer(),
    width: '100%',
  },
});

export default styles;
