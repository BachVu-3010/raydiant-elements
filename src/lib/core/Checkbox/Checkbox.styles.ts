import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    checkboxContainer: {
      position: 'relative',
      display: 'inline-block',
      width: 20,
      height: 20,
    },
    checkbox: {
      padding: 0,
      color: theme.checkbox.backgroundChecked,
    },
    iconContainer: {
      width: 20,
      height: 20,
      backgroundColor: theme.checkbox.background,
      border: `1px solid ${theme.checkbox.border}`,
      borderRadius: theme.borderRadius.sm,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconDisabled: {
      background: 'transparent',
      borderColor: theme.checkbox.borderMuted,
      cursor: 'not-allowed',
    },
    round: {
      borderRadius: '100%',
    },
    iconChecked: {
      backgroundColor: theme.checkbox.backgroundChecked,
      borderColor: theme.checkbox.backgroundChecked,
    },
    iconCheckedDisabled: {
      backgroundColor: theme.checkbox.borderMuted,
      borderColor: theme.checkbox.borderMuted,
    },
    icon: {
      height: '100%',
      width: '100%',
      color: theme.checkbox.foreground,
    },
    labelContainer: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-start',
    },
    label: {
      marginTop: theme.spacing.unit / 8,
      marginLeft: theme.spacing.unit,
    },
    labelDisabled: {
      cursor: 'not-allowed',
      color: theme.palette.text.secondary,
    },
  });

export default styles;
