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
        marginLeft: theme.spacing(0.875),
        paddingBottom: theme.spacing(0.25),
      },
      '&>:nth-child(1)': {
        marginTop: theme.spacing(0.375),
      },
    },
    labelButton: {},
    label: {
      padding: theme.spacing(0, 0.25, 0, 0.5),
      borderRadius: theme.borderRadius.sm,
      border: 'solid 1px transparent',
      display: 'flex',
      lineHeight: '22px',
      '&$selected': {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: 'rgba(0, 0, 0, 0.87)',
      },
      '&$labelButton': {
        borderColor: '#000000',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.4)',
      },
    },
    leftLabel: {
      flex: '1 4 auto',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      marginRight: theme.spacing(2),
      minWidth: '20%',
    },
    rightLabel: {
      flex: '1 6 auto',
      textAlign: 'right',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      minWidth: '20%',
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
      letterSpacing: 0.1,
      color: 'rgba(0, 0, 0, 0.45)',
    },
  });

export default styles;
