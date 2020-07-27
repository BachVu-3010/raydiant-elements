import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    control: {
      display: 'flex',
      flexDirection: 'row',
    },

    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.fontSizes.sm,
      color: theme.palette.text.primary,
      marginLeft: theme.spacing(1),
    },

    labelDisabled: {
      opacity: 0,
    },

    switchContainer: {
      position: 'relative',
      height: 20,
      width: 46,
    },

    switchInner: {
      // MUI Switches have extra margins to compensate for the ripple effect. We position it
      // absolutely inside a container element with the correct width / height.
      position: 'absolute',
      top: -9,
      left: -9,
    },

    switchRoot: {
      padding: 8,
    },

    switchBase: {
      color: theme.switch.barChecked,

      '& $thumb': {
        width: 18,
        height: 18,
        margin: 1,
        color: theme.switch.knob,
      },

      '&$focusVisible $thumb': {
        color: theme.switch.knob,
      },

      '& + $track': {
        borderRadius: 20,
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
          opacity: 0.5,
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
    focusVisible: {},
  });

export default styles;
