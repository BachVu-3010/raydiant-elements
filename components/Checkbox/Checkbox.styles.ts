import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: 20,
      height: 20,
    },
    checkbox: {
      // MUI Checkboxes have a width / height of 48px to compensate for the ripple effect
      // which adds undesirable padding to the element. As a workaround, we position it
      // absolutely inside a container element with the correct width / height.
      position: 'absolute',
      top: -14,
      left: -14,
      padding: 0,
      color: theme.checkbox.default.backgroundChecked,
      '&$checked': {
        color: theme.checkbox.default.backgroundChecked,
      },
    },
    container: {
      boxSizing: 'border-box',
      width: 20,
      height: 20,
      backgroundColor: theme.checkbox.default.background,
      border: `1px solid ${theme.checkbox.default.border}`,
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    round: {
      borderRadius: '100%',
    },
    disabled: {
      background: 'transparent',
      borderColor: theme.checkbox.default.borderMuted,
    },
    containerChecked: {
      backgroundColor: theme.checkbox.default.backgroundChecked,
      borderColor: theme.checkbox.default.backgroundChecked,
    },
    icon: {
      height: '100%',
      width: '100%',
      color: theme.checkbox.default.foreground,
    },
  });

export default styles;
