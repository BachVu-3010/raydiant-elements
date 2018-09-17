import MUIButton from '@material-ui/core/Button';
import * as cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../../helpers';
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
  /** The type of button, defaults to button. */
  type?: 'submit' | 'button';
  /** Called when the button is clicked */
  onClick?: () => any;
  /** Overrides icon and label */
  children?: React.ReactNode;
  /** The test id of the button */
  testId?: string;
}

export const Button: React.SFC<ButtonProps> = ({
  label,
  icon,
  color = 'default',
  disabled = false,
  type = 'button',
  children,
  onClick = () => {
    return;
  },
  classes,
  testId,
}) => (
  <MUIButton
    variant={color === 'default' ? 'flat' : 'raised'}
    disabled={disabled}
    type={type}
    onClick={onClick}
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
    {...testAttr(testId)}
  >
    {!children &&
      icon && (
        <Icon icon={icon} className={cn(label && classes.iconWithLabel)} />
      )}
    {children || label}
  </MUIButton>
);

export default withStyles(styles)(Button);
