import MUIButton from '@material-ui/core/Button';
import * as cn from 'classnames';
import * as React from 'react';
import Icon, { IconOptions } from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Button.styles';

interface ButtonProps extends WithStyles<typeof styles> {
  /** The button's label */
  label?: string;
  /** The button's icon */
  icon?: IconOptions;
  /** The button's color */
  color?: 'default' | 'primary' | 'progress' | 'destructive';
  /** Set to true to disable the button */
  disabled?: boolean;
}

export const Button: React.SFC<ButtonProps> = ({
  label,
  icon,
  color = 'default',
  disabled = false,
  classes,
}) => (
  <MUIButton
    variant={color === 'default' ? 'flat' : 'raised'}
    disabled={disabled}
    classes={{
      root: cn(
        classes.button,
        icon && label && classes.buttonWithIcon,
        icon && !label && classes.buttonOnlyIcon,
        color === 'default' && classes.default,
        color === 'primary' && classes.primary,
        color === 'destructive' && classes.destructive,
        color === 'progress' && classes.progress,
      ),
      label: classes.label,
    }}
  >
    {icon && (
      <Icon icon={icon} className={cn(label && classes.iconWithLabel)} />
    )}
    {label}
  </MUIButton>
);

export default withStyles(styles)(Button);
