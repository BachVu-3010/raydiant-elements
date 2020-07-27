import ButtonBase from '@material-ui/core/ButtonBase';
import * as cn from 'classnames';
import * as React from 'react';
import useStyles from './ActionBarAction.styles';

export interface ActionBarActionProps {
  icon: React.ReactNode;
  label?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ActionBarAction: React.SFC<ActionBarActionProps> = (
  { icon, label, selected, disabled, onClick },
  ref,
) => {
  const classes = useStyles();
  const labelEl = (
    <span className={cn(classes.label, selected && classes.labelSelected)}>
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
      {icon}
      {label && labelEl}
    </ButtonBase>
  );
};

export default React.forwardRef(ActionBarAction);
