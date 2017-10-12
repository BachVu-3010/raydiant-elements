import React, { Children } from 'react';
import PropTypes from 'prop-types';
import MUIButton from 'material-ui/Button';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const propTypes = {
  /** Child elements are used as the button text. */
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
  children: null,
  color: 'default',
  disabled: false,
  fullWidth: false,
  icon: null,
  label: null,
  shrinkwrap: false,
  onClick: () => {},
  type: 'button',
};

/**
 * A clickable thing to click on.
 * Buttons may have text, imagery, or both.
 */
const Button = ({
  children,
  classes,
  color,
  disabled,
  fullWidth,
  onClick,
  type,
  shrinkwrap,
}) => (
  <span
    className={classnames(classes.root, { [classes.fullWidth]: fullWidth })}
  >
    <MUIButton
      {...{ disabled, onClick, type }}
      className={classnames(
        classes.button,
        classes[color],
        shrinkwrap && classes.shrinkwrap,
      )}
      raised={color !== 'default'}
    >
      {Children.map(children, child => <span>{child}</span>)}
    </MUIButton>
  </span>
);

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
