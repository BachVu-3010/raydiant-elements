import { buttonReset } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      boxSizing: 'border-box',
      width: '100%',
      padding: theme.spacing(0, 4),
    },
    disabled: {
      cursor: 'not-allowed',
    },
    selected: {},
    checkboxLabel: {
      alignItems: 'flex-start',
      '&>:nth-child(2)': {
        flex: 1,
        marginLeft: theme.spacing(0.75),
      },
    },
    label: {
      padding: theme.spacing(0, 0.25),
      display: 'flex',
      '&$selected': {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    rightLabel: {
      paddingLeft: theme.spacing(2),
      marginLeft: 'auto',
      textAlign: 'right',
      maxWidth: 124,
      overflow: 'hidden',
    },
  });

export default styles;
