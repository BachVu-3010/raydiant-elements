import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      color: theme.switch.default.foreground,
      marginLeft: theme.spacing.unit / 2,
    },
    labelDisabled: {
      color: theme.switch.default.foregroundMuted,
    },
    switchContainer: {
      position: 'relative',
      height: 20,
      width: 34,
    },
    switchInner: {
      // MUI Switches have extra margins to compensate for the ripple effect. We position it
      // absolutely inside a container element with the correct width / height.
      position: 'absolute',
      top: -14,
      left: -14,
    },
    switchBase: {
      color: theme.switch.default.barChecked,

      '& $knob': {
        color: theme.switch.default.knob,
      },
      '& + $bar': {
        backgroundColor: theme.switch.default.bar,
        opacity: 1,
      },
      '&$checked': {
        color: theme.switch.default.barChecked,

        '& + $bar': {
          backgroundColor: theme.switch.default.barChecked,
          opacity: 1,
        },
      },
      '&$disabled': {
        '& $knob': {
          color: theme.switch.default.knobMuted,
        },
        '& + $bar': {
          backgroundColor: theme.switch.default.bar,
          opacity: 1,
        },
      },
    },
    checked: {},
    bar: {},
    disabled: {},
    knob: {},
  });

export default styles;
