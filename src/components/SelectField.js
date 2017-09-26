import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MUITextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

import { styles } from './TextField';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** The option elements to populate the select with */
  children: PropTypes.node,
  /** If true, value must be an array and the menu will support multiple selections. */
  // NOTE: cannot use multiple with native
  // multiple: PropTypes.bool,
  /** The description for the input field. */
  label: PropTypes.string.isRequired,
  /** The input value */
  value: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Whether the button is disabled or not. */
  disabled: PropTypes.bool,
  /** Ghosted text to display if the input field is empty. */
  placeholder: PropTypes.string,
  /** Input should be in an error state.  
   * Pass `true` or `'error'` for an error state.  
   * Pass `'alert'` for an alert state.
  */
  error: PropTypes.oneOf(['alert', 'error', true, false]),
  /** Name */
  name: PropTypes.string,
  /** Additional information to help the user fill the field. */
  helperText: PropTypes.string,
  /** Called when the user blurs the text field. */
  onBlur: PropTypes.func,
  /** Called when the user modifies the text. */
  onChange: PropTypes.func,
  /** Called when the user focuses the text field. */
  onFocus: PropTypes.func,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const defaultProps = {
  className: '',
  children: null,
  multiple: false,
  value: '',
  disabled: false,
  placeholder: '',
  error: false,
  name: '',
  helperText: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

/** Select field */
const SelectField = ({
  classes,
  className,
  disabled,
  error,
  helperText,
  label,
  name,
  placeholder,
  value,
  onBlur,
  onChange,
  onFocus,
  children,
}) => (
  <MUITextField
    select
    fullWidth
    className={classnames(className, classes.root, {
      [classes.alert]: error === 'alert',
    })}
    {...{
      disabled,
      error,
      helperText,
      label,
      name,
      placeholder,
      value,
      onBlur,
      onChange,
      onFocus,
    }}
    SelectProps={{
      native: true,
      MenuProps: {
        className: classes.menu,
      },
    }}
  >
    {children}
  </MUITextField>
);

SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;

export default withStyles(styles)(SelectField);
