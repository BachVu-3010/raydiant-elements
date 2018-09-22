import MUISwitch from '@material-ui/core/Switch';
import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Switch.styles';

interface SwitchProps extends WithStyles<typeof styles> {
  checked: boolean;
  label?: React.ReactNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch: React.SFC<SwitchProps> = ({
  checked,
  label,
  disabled,
  onChange,
  classes,
}) => (
  <label className={classes.root}>
    <span className={classes.switchContainer}>
      <span className={classes.switchInner}>
        <MUISwitch
          checked={checked}
          disabled={disabled}
          onChange={e => onChange(e.target.checked)}
          classes={{
            switchBase: classes.switchBase,
            checked: classes.checked,
            icon: classes.knob,
            bar: classes.bar,
            disabled: classes.disabled,
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
);

export default withStyles(styles)(Switch);
