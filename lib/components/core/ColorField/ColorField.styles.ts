import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      '& .block-picker, & .block-picker > div': {
        borderRadius: '0 !important',
      },
    },
    color: {
      width: 12,
      height: 12,
      marginRight: theme.spacing.unit / 2,
      borderRadius: 100,
      border: `1px solid ${theme.button.border}`,
    },
  });

export default styles;
