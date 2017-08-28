import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import MUIButton from 'material-ui/Button';
import classnames from 'classnames';
import { createStyleSheet, withStyles } from 'material-ui/styles';

const propTypes = {
  /** Child elements are used as the button text. */
  children: PropTypes.node,
  /** Style of the button. */
  color: PropTypes.oneOf(['default', 'destructive', 'primary', 'progress']),
  /** Disable the button? */
  disabled: PropTypes.bool,
  /** Fill the entire width of its container? */
  fullWidth: PropTypes.bool,
  /** An icon. */
  icon: PropTypes.string,
  /** Called when the user clicks the control. */
  onClick: PropTypes.func,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired,
};
const defaultProps = {
  children: null,
  color: 'default',
  disabled: false,
  fullWidth: false,
  icon: null,
  onClick: () => {},
};

/**
 * A clickable thing to click on.
 * Buttons may have text, imagery, or both.
 */
const Button = ({ children, classes, color, disabled, fullWidth, icon, onClick }) => {
  let ic = null;
  if (icon) {
    ic = <Icon>{icon}</Icon>;
  }
  return <MUIButton
    {...{ disabled, onClick }}
    className={classnames(classes[color], { [classes.fullWidth]: fullWidth })}
    raised={color !== 'default'}
  >
    {ic}{children}
  </MUIButton>;
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

const styleSheet = createStyleSheet(theme => ({
  fullWidth: { width: '100%' },
  default: {},
  primary: getButtonStyle(theme, theme.palette.primary),
  destructive: getButtonStyle(theme, theme.palette.destructive),
  progress: getButtonStyle(theme, theme.palette.progress),
}));

export default withStyles(styleSheet)(Button);
