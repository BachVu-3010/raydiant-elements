import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    control: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.fontSizes.md,
      color: theme.switch.foreground,
      marginLeft: theme.spacing(0.5),
    },
    labelDisabled: {
      color: theme.switch.foregroundMuted,
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
      top: -9,
      left: -14,
    },
    switchBase: {
      color: theme.switch.barChecked,

      '& $thumb': {
        color: theme.switch.knob,
      },
      '& + $track': {
        backgroundColor: theme.switch.bar,
        opacity: 1,
      },
      '&$checked': {
        color: theme.switch.barChecked,

        '& + $track': {
          backgroundColor: theme.switch.barChecked,
          opacity: 1,
        },
      },
      '&$disabled': {
        '& $thumb': {
          color: theme.switch.knobMuted,
        },
        '& + $track': {
          backgroundColor: theme.switch.bar,
          opacity: 1,
        },
      },
    },
    checked: {},
    track: {},
    disabled: {},
    thumb: {},
  });

export default styles;
