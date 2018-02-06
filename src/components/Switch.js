import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import FormControlLabel from './FormControlLabel';
import SwitchInput from './SwitchInput';
import { HelperText } from './Typography';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Child elements are used as the switch label. */
  children: PropTypes.node,
  /** Whether the switch is on or off. */
  checked: PropTypes.bool,
  /** Whether the switch is disabled or not. */
  disabled: PropTypes.bool,
  /**
   * The ID of an element that labels this control.
   * Useful if this control is separated from its text.
   */
  labelledBy: PropTypes.string,
  /** Additional information to help the user fill the field. */
  helperText: PropTypes.node,
  /** Called when the user clicks the control. */
  onChange: PropTypes.func,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const defaultProps = {
  className: '',
  children: null,
  checked: false,
  disabled: false,
  labelledBy: null,
  helperText: '',
  onChange: () => {},
};

/**
 * Use for `true` or `false` settings.
 */
const Switch = ({
  className,
  children,
  checked,
  disabled,
  labelledBy,
  helperText,
  onChange,
  classes,
}) => (
  <div className={classnames(classes.container, className)}>
    <div>
      <FormControlLabel
        control={
          <SwitchInput {...{ checked, disabled, labelledBy, onChange }} />
        }
        disabled={disabled}
        label={children}
      />
    </div>
    {helperText && <HelperText>{helperText}</HelperText>}
  </div>
);

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

const styles = {
  container: {
    display: 'inline-block',
  },
};

export default withStyles(styles)(Switch);
