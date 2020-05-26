import ButtonBase from '@material-ui/core/ButtonBase';
import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ActionBarAction.styles';

export interface ActionBarActionProps extends WithStyles<typeof styles> {
  icon: React.ReactNode;
  label?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  subAction?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ActionBarAction: React.SFC<ActionBarActionProps> = (
  { classes, icon, label, selected, disabled, subAction, onClick },
  ref,
) => {
  const labelEl = (
    <span
      className={cn(
        classes.label,
        subAction && classes.subActionLabel,
        selected && classes.labelSelected,
      )}
    >
      {label}
    </span>
  );
  return (
    <ButtonBase
      ref={ref}
      disableRipple
      className={cn(classes.root, disabled && classes.disabled)}
      disabled={disabled}
      onClick={onClick}
    >
      {subAction && label && labelEl}
      {icon}
      {!subAction && label && labelEl}
    </ButtonBase>
  );
};

export default withStyles(styles)(React.forwardRef(ActionBarAction));
