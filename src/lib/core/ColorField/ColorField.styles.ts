import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'inline-block',
      '& .block-picker, & .block-picker > div': {
        borderRadius: '0 !important',
      },
    },
    color: {
      width: 12,
      height: 12,
      marginRight: theme.spacing(0.5),
      borderRadius: 100,
      border: `1px solid ${theme.button.border}`,
    },
  });

export default styles;
