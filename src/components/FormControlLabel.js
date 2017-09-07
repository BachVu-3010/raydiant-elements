// @flow
/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'baseline',
    cursor: 'pointer',
    WebkitTapHighlightColor: theme.palette.common.transparent,
    ...theme.typography.body2,
  },
  disabled: {
    opacity: 0.5,
    cursor: 'default',
  },
  label: {
    marginLeft: theme.spacing.unit,
    userSelect: 'none',
  },
});

const propTypes = {
  className: PropTypes.string,
  control: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  inputRef: PropTypes.func,
  label: PropTypes.node,
};

const defaultProps = {
  className: '',
  disabled: false,
  inputRef: null,
  label: '',
  onChange: () => {},
};

const FormControlLabel = ({
  classes,
  className,
  control,
  disabled,
  inputRef,
  label,
}) => (
  <label
    className={classnames(
      classes.root,
      { [classes.disabled]: disabled },
      className,
    )}
  >
    <span>{React.cloneElement(control, { inputRef })}</span>
    <span className={classes.label}>{label}</span>
  </label>
);

FormControlLabel.propTypes = propTypes;
FormControlLabel.defaultProps = defaultProps;

export default withStyles(styles)(FormControlLabel);
