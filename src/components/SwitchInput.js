import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import SwitchBase from './SwitchBase';

const innerStyles = theme => ({
  default: {
    color: theme.palette.switch ? theme.palette.switch.barChecked : '', // ripple color
    position: 'absolute',
    top: 0,
    left: '-1px',
    boxSizing: 'border-box',
    // border: '1px solid #999',
    boxShadow: theme.shadows[1],
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: '50%',
    '&:hover': {
      boxShadow: theme.shadows[2],
    },
    transition: 'transform 0.2s ease-in-out, background-color 0.1s',
  },
  checked: {
    transform: 'translateX(16px)',
  },
  disabled: {
    boxShadow: 'none',
  },
});
const styles = theme => ({
  root: {
    verticalAlign: 'middle',
    display: 'inline-block',
    position: 'relative',
    height: '20px',
  },
  bar: {
    borderRadius: 7,
    display: 'block',
    width: '34px',
    height: 14,
    left: 0,
    margin: '3px 0',
    transition: theme.transitions.create(['opacity', 'background-color'], {
      duration: theme.transitions.duration.shortest,
    }),
    backgroundColor: theme.palette.switch ? theme.palette.switch.bar : '',
  },
  barChecked: {
    backgroundColor: theme.palette.switch
      ? theme.palette.switch.barChecked
      : '',
  },
  barDisabled: {
    backgroundColor: theme.palette.text.primary,
  },
});

const Base = SwitchBase({
  type: 'switch',
  styles: innerStyles,
  inputType: 'checkbox',
});

const SwitchInput = ({ classes, checked, disabled, ...rest }) => (
  <div className={classes.root}>
    <div
      className={classnames(classes.bar, {
        [classes.barChecked]: checked,
        [classes.barDisabled]: disabled,
      })}
    />
    <Base {...{ checked, disabled, ...rest }} />
  </div>
);
SwitchInput.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};
SwitchInput.defaultProps = {
  checked: false,
  disabled: false,
};

export default withStyles(styles)(SwitchInput);
