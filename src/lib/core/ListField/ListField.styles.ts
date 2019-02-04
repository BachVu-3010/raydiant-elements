import { buttonReset, textTruncate } from '../../mixins';
import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    item: {
      // prevent text selection while drag and dropping
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      borderBottom: `1px solid ${theme.button.border}`,
    },
    itemLabel: {
      ...buttonReset(),
      flex: 1,
      minHeight: '1em',
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit / 2,
    },
    icon: {
      height: 14,
      width: 'auto',
      padding: `0 ${theme.spacing.unit}px`,
      cursor: 'move',
    },
    add: {
      ...buttonReset(),
      display: 'block',
      width: '100%',
      padding: theme.spacing.unit * 2,
    },
    addDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    addIcon: {
      display: 'block',
      margin: '0 auto',
      marginBottom: theme.spacing.unit / 2,
    },
    addLabel: {
      ...textTruncate(),
      textAlign: 'center',
    },
  });

export default styles;
