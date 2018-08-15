import MUICheckbox from '@material-ui/core/Checkbox';
import cn from 'classnames';
import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Checkbox.styles';

interface CheckboxProps extends WithStyles<typeof styles> {
  checked: boolean;
  round?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  checked,
  round,
  disabled,
  onChange,
  classes,
}) => (
  <span className={classes.root}>
    <MUICheckbox
      checked={checked}
      disabled={disabled}
      onChange={e => onChange(e.target.checked)}
      color="primary"
      icon={
        <div
          className={cn(
            classes.container,
            disabled && classes.disabled,
            round && classes.round,
          )}
        />
      }
      checkedIcon={
        <div
          className={cn(
            classes.container,
            classes.containerChecked,
            round && classes.round,
          )}
        >
          <Icon icon="checkmark" className={classes.icon} />
        </div>
      }
      classes={{ root: classes.checkbox }}
    />
  </span>
);

export default withStyles(styles)(Checkbox);
