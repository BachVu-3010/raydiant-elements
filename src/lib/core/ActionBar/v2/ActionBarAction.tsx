import ButtonBase from '@material-ui/core/ButtonBase';
import * as cn from 'classnames';
import * as React from 'react';
import useStyles from './ActionBarAction.styles';

export interface ActionBarActionProps {
  className?: string;
  color?: 'default' | 'success' | 'primary' | 'error' | 'primaryText';
  variant?: 'default' | 'vertical';
  icon?: React.ReactNode;
  label?: React.ReactNode;
  fullWidth?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ActionBarAction: React.SFC<ActionBarActionProps> = (
  {
    className,
    color,
    variant,
    icon,
    label,
    fullWidth,
    selected,
    disabled,
    onClick,
  },
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
      className={cn(
        classes.root,
        disabled && classes.disabled,
        fullWidth && classes.fullWidth,
        variant === 'vertical' && classes.vertical,
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className={cn(classes.icon, classes[color])}>{icon}</span>}
      {label && labelEl}
    </ButtonBase>
  );
};

export default React.forwardRef(ActionBarAction);
