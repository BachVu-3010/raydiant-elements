import MUISwitch from '@material-ui/core/Switch';
import cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import InputLabel from '../InputLabel';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Switch.styles';

interface SwitchProps extends WithStyles<typeof styles> {
  /** Whether or not the input is checked */
  checked: boolean;
  /** The label of the input */
  label?: React.ReactNode;
  /** Set to true to disable the input */
  disabled?: boolean;
  /** Called when the checked state changes */
  onChange?: (checked: boolean) => void;
  /** Additional information to help the user fill the field. */
  helperText?: React.ReactNode;
  testId?: string;
}

export const Switch: React.SFC<SwitchProps> = ({
  checked = false,
  label,
  disabled,
  onChange,
  helperText,
  classes,
  testId,
}) => (
  <div className={classes.root}>
    <InputLabel disabled={disabled}>{label}</InputLabel>
    <div className={classes.control}>
      <span className={classes.switchContainer}>
        <span className={classes.switchInner}>
          <MUISwitch
            checked={checked}
            disabled={disabled}
            onChange={e => onChange(e.target.checked)}
            classes={{
              root: classes.switchRoot,
              switchBase: classes.switchBase,
              checked: classes.checked,
              thumb: classes.thumb,
              track: classes.track,
              disabled: classes.disabled,
            }}
            focusVisibleClassName={classes.focusVisible}
            inputProps={{
              ...(testAttr(testId) as React.InputHTMLAttributes<
                HTMLInputElement
              >),
            }}
          />
        </span>
      </span>
      {helperText && (
        <span
          className={cn(classes.helper, disabled && classes.helperDisabled)}
        >
          {helperText}
        </span>
      )}
    </div>
  </div>
);

export default withStyles(styles)(Switch);
