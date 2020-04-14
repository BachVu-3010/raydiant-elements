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
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
    },
    icon: {
      height: 14,
      width: 'auto',
      padding: theme.spacing(0, 1),
      cursor: 'move',
    },
    add: {
      ...buttonReset(),
      display: 'block',
      width: '100%',
      padding: theme.spacing(2),
    },
    addDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    addIcon: {
      display: 'block',
      margin: '0 auto',
      marginBottom: theme.spacing(0.5),
    },
    addLabel: {
      ...textTruncate(),
      textAlign: 'center',
    },
  });

export default styles;
