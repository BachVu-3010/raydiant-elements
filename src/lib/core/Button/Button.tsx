import MUIButton from '@material-ui/core/Button';
import * as cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import Icon, { IconOptions } from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Button.styles';

interface ButtonProps extends WithStyles<typeof styles> {
  /** The button's label */
  label?: React.ReactNode;
  /** The button's icon */
  icon?: IconOptions;
  /** The button's color */
  color?: 'default' | 'primary' | 'progress' | 'destructive';
  /** Set to true to disable the button */
  disabled?: boolean;
  /** Set to true to make the button expand to it's container */
  fullWidth?: boolean;
  /** Set to true to hide the border */
  hideBorder?: boolean;
  /** The type of button, defaults to button. */
  type?: 'submit' | 'button';
  /** Called when the button is clicked */
  onClick?: (event: React.MouseEvent<any>) => any;
  /** Overrides icon and label */
  children?: React.ReactNode;
  /** The test id of the button */
  testId?: string;
}

export const Button: React.SFC<ButtonProps> = ({
  label,
  icon,
  color = 'default',
  hideBorder = false,
  disabled = false,
  type = 'button',
  fullWidth = false,
  children,
  onClick = () => {
    return;
  },
  classes,
  testId,
}) => {
  const hasIcon = !!icon;
  const hasLabel = !!label || !!children;
  return (
    <MUIButton
      variant={color === 'default' ? 'text' : 'contained'}
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      classes={{
        root: cn(
          classes.button,
          hasIcon && !hasLabel && classes.buttonOnlyIcon,
          hasIcon && hasLabel && classes.buttonWithIconAndLabel,
          fullWidth && classes.buttonFullWidth,
          hideBorder && classes.hideBorder,
          color === 'default' && classes.default,
          color === 'primary' && classes.primary,
          color === 'destructive' && classes.destructive,
          color === 'progress' && classes.progress,
        ),
        label: classes.label,
      }}
      {...testAttr(testId)}
    >
      {icon && (
        <Icon
          icon={icon}
          className={cn(
            hasLabel && classes.iconWithLabel,
            fullWidth && classes.iconWithLabelFullWidth,
          )}
        />
      )}
      {label || children}
    </MUIButton>
  );
};

export default withStyles(styles)(Button);
