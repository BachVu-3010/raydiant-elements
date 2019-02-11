import { createStyles } from '../../../core/withStyles';
import { buttonReset } from '../../../mixins';
import { Theme } from '../../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing.unit * 2,
      padding: theme.spacing.unit * 2,
      borderRadius: theme.borderRadius.sm,
      border: `1px solid ${theme.button.border}`,

      '& > svg': {
        marginBottom: theme.spacing.unit / 2,
      },
    },
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  });

export default styles;
