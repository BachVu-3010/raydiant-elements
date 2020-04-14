import MUISwitch from '@material-ui/core/Switch';
import cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import FormHelperText from '../../internal/FormHelperText';
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
    <label className={classes.control}>
      <span className={classes.switchContainer}>
        <span className={classes.switchInner}>
          <MUISwitch
            checked={checked}
            disabled={disabled}
            onChange={e => onChange(e.target.checked)}
            classes={{
              switchBase: classes.switchBase,
              checked: classes.checked,
              thumb: classes.thumb,
              track: classes.track,
              disabled: classes.disabled,
            }}
            inputProps={{
              ...(testAttr(testId) as React.InputHTMLAttributes<
                HTMLInputElement
              >),
            }}
          />
        </span>
      </span>
      {label && (
        <span className={cn(classes.label, disabled && classes.labelDisabled)}>
          {label}
        </span>
      )}
    </label>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </div>
);

export default withStyles(styles)(Switch);
