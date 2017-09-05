// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';

export const styles = () => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    alignSelf: 'center', // Control should align to top if label text wraps
    cursor: 'pointer',
    // target the "ripple" span
    '& > span': {
      height: '200%',
      width: '200%',
      top: '-50%',
      left: '-50%',
    },
  },
  input: {
    // Stretch the input to cover the rendered control
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
  },
  default: {},
  checked: {},
  disabled: {},
  focus: {},
});

const propTypes = {
  checked: PropTypes.bool,
  checkedClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  inputRef: PropTypes.func,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  variant: PropTypes.string,
};
const defaultProps = {
  checked: false,
  checkedClassName: '',
  className: '',
  disabled: false,
  disabledClassName: '',
  inputRef: null,
  name: '',
  onChange: () => {},
  value: '',
  variant: null,
};

export default function createSwitch({ type, inputType, styles: inStyles }) {
  class SwitchBase extends React.Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static displayName = `SwitchBase-${type}`

    input = null;
    button = null;

    handleInputChange = event => {
      this.props.onChange(event, !this.props.checked);
    };

    render() {
      const {
        checked,
        checkedClassName,
        classes,
        className: classNameProp,
        disabled,
        disabledClassName,
        inputRef,
        name,
        onChange,
        value,
        variant,
        ...other
      } = this.props;

      const className = classNames(classes.root, classes.default, classes[variant], classNameProp, {
        [classNames(classes.checked, checkedClassName)]: checked,
        [classNames(classes.disabled, disabledClassName)]: disabled,
      });

      return (
        <ButtonBase
          className={className}
          centerRipple
          focusRipple
          disabled={disabled}
          component="span"
          keyboardFocusedClassName={classes.focus}
          role={undefined}
          tabIndex={null}
          ref={node => { this.buttonBase = node; }}
          {...other}
        >
          <input
            ref={node => {
              this.input = node;
              if (inputRef) {
                inputRef(node);
              }
            }}
            type={inputType}
            {...{ name, checked, disabled, value }}
            onChange={this.handleInputChange}
            className={classes.input}
          />
        </ButtonBase>
      );
    }
  }

  return withStyles(theme => ({ ...styles(theme), ...inStyles(theme) }))(SwitchBase);
}
