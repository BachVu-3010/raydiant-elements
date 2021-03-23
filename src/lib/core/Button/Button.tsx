import MUIButton from '@material-ui/core/Button';
import * as cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import Icon, { IconOptions } from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Button.styles';

interface ButtonProps extends WithStyles<typeof styles> {
  className?: string;
  /** The button's label */
  label?: React.ReactNode;
  /** The button's icon */
  icon?: IconOptions | React.ReactNode;
  /** Set the icon alignment relative to the label */
  iconAlignment?: 'start' | 'end';
  /** The button's color */
  color?: 'default' | 'primary' | 'progress' | 'destructive' | 'light';
  /** The size of the button */
  size?: 'small' | 'default';
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

export const Button: React.SFC<ButtonProps> = (
  {
    className,
    label,
    icon,
    iconAlignment = 'end',
    color = 'default',
    size = 'default',
    hideBorder = false,
    disabled = false,
    type = 'button',
    fullWidth = false,
    children,
    onClick,
    classes,
    testId,
  },
  ref,
) => {
  const hasIcon = !!icon;
  const hasLabel = !!label || !!children;

  const iconEl = hasIcon && (
    <div
      className={cn(
        classes.icon,
        hasLabel && classes.iconWithLabel,
        fullWidth && classes.iconWithLabelFullWidth,
      )}
    >
      {typeof icon === 'string' ? <Icon icon={icon as IconOptions} /> : icon}
    </div>
  );

  let contents = [label || children, iconEl];
  if (iconAlignment === 'start') {
    contents = contents.reverse();
  }

  return (
    <MUIButton
      ref={ref}
      variant="contained"
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      classes={{
        root: cn(
          classes.button,
          hasIcon && !hasLabel && classes.buttonOnlyIcon,
          hasIcon && hasLabel && classes.buttonWithIconAndLabel,
          iconAlignment === 'start'
            ? classes.iconAlignStart
            : classes.iconAlignEnd,
          fullWidth && classes.buttonFullWidth,
          hideBorder && classes.hideBorder,
          color === 'default' && classes.default,
          color === 'primary' && classes.primary,
          color === 'destructive' && classes.destructive,
          color === 'progress' && classes.progress,
          color === 'light' && classes.light,
          size === 'small' && classes.small,
          className,
        ),
        label: classes.label,
      }}
      {...testAttr(testId)}
    >
      {contents[0]}
      {contents[1]}
    </MUIButton>
  );
};

export default withStyles(styles)(React.forwardRef(Button));
