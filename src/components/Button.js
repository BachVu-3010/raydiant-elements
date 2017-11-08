import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from 'material-ui/Button';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Icon from './Icon';

const propTypes = {
  /** Icon of the button */
  icon: PropTypes.string,
  /** Text of the button */
  label: PropTypes.string,
  /** Child elements are used as the button text if label is not provided. */
  children: PropTypes.node,
  /** Style of the button. */
  color: PropTypes.oneOf(['default', 'destructive', 'primary', 'progress']),
  /** Disable the button? */
  disabled: PropTypes.bool,
  /** Fill the entire width of its container? */
  fullWidth: PropTypes.bool,
  /** Called when the user clicks the control. */
  onClick: PropTypes.func,
  /** Button type. Usually you want the default `button`, but you may want a `submit` button. */
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'menu']),
  /** Pass true to ignore min-width */
  shrinkwrap: PropTypes.bool,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const defaultProps = {
  icon: null,
  label: null,
  children: null,
  color: 'default',
  disabled: false,
  fullWidth: false,
  shrinkwrap: false,
  onClick: () => {},
  type: 'button',
};

/**
 * A clickable thing to click on.
 * Buttons may have text, imagery, or both.
 */
const Button = ({
  icon,
  label,
  children,
  classes,
  color,
  disabled,
  fullWidth,
  onClick,
  type,
  shrinkwrap,
}) => {
  const isIconButton = icon && !label;
  const isIconTextButton = icon && label;
  const shouldShrinkwrap = isIconButton || shrinkwrap;
  return (
    <span
      className={classnames(classes.root, { [classes.fullWidth]: fullWidth })}
    >
      <MUIButton
        {...{ disabled, onClick, type }}
        className={classnames(
          classes.button,
          classes[color],
          shouldShrinkwrap && classes.shrinkwrap,
          isIconTextButton && classes.iconText
        )}
        raised={color !== 'default'}
      >
        {icon && (
          <Icon
            className={classnames(!isIconButton && classes.icon)}
            icon={icon}
          />
        )}
        {label && <span className={classes.label}>{label}</span>}
        {!label && children}
      </MUIButton>
    </span>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

const getButtonStyle = (theme, palette) => {
  if (!palette) {
    return {};
  }
  return {
    color: theme.palette.getContrastText(palette[500]),
    borderColor: palette[500],
    backgroundColor: palette[500],
    '&:hover': {
      backgroundColor: palette[700],
      borderColor: palette[700],
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: palette[500],
      },
      '&:disabled': {
        backgroundColor: palette[500],
      },
    },
    '&:disabled': {
      backgroundColor: palette[500],
    },
  };
};

const styles = theme => ({
  icon: { marginRight: `${theme.spacing.unit}px` },
  label: { whiteSpace: 'nowrap' },
  iconText: { paddingLeft: '12px' },
  root: { display: 'inline-block' },
  button: { width: '100%' },
  fullWidth: { display: 'block' },
  shrinkwrap: { minWidth: 0 },
  default: {},
  primary: getButtonStyle(theme, theme.palette.primary),
  destructive: getButtonStyle(theme, theme.palette.destructive),
  progress: getButtonStyle(theme, theme.palette.progress),
});

export default withStyles(styles)(Button);
