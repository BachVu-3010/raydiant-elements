import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { withStyles } from 'material-ui/styles';
import Button from './Button';
import Popover from './Popover';
import PopoverAnchor from './PopoverAnchor';

class ColorPicker extends Component {
  static propTypes = {
    /** Class name(s) */
    className: PropTypes.string,
    /** The label of the picker */
    label: PropTypes.string.isRequired,
    /** The selected color of the picker (supports hex, rgb, rgba, hsl) */
    value: PropTypes.string.isRequired,
    /** Pass true to fill the entire width of its container */
    fullWidth: PropTypes.bool,
    /** Called when the color changes. */
    onChange: PropTypes.func.isRequired,
    /** @ignore injected by withStyles */
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    className: '',
    fullWidth: false,
  };

  state = {
    open: false,
  };

  openPicker = () => {
    this.setState({ open: true });
  };

  closePicker = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      label,
      value,
      fullWidth,
      onChange,
      className,
      classes,
    } = this.props;
    const { open } = this.state;

    return (
      <div className={classnames(classes.container, className)}>
        <PopoverAnchor>
          <Button
            fullWidth={fullWidth}
            onClick={open ? this.closePicker : this.openPicker}
          >
            <div className={classes.color} style={{ backgroundColor: value }} />
            {label}
          </Button>
          <Popover
            anchor="top left"
            to="bottom left"
            open={open}
            onOverlayClick={this.closePicker}
          >
            <ChromePicker
              color={value || 'transparent'}
              onChangeComplete={onChange}
            />
          </Popover>
        </PopoverAnchor>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    position: 'relative',
    '& .block-picker, & .block-picker > div': {
      borderRadius: '0 !important',
    },
  },
  color: {
    width: 12,
    height: 12,
    marginRight: theme.spacing.unit / 2,
    borderRadius: 100,
    border: `1px solid ${
      theme.overrides ? theme.overrides.MuiButton.root.borderColor : ''
    }`,
  },
});

export default withStyles(styles)(ColorPicker);
