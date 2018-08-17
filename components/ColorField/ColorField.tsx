import * as React from 'react';
import ChromePicker from 'react-color/lib/Chrome';
import Button from '../Button';
import Popover, { PopoverAnchor } from '../Popover';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ColorField.styles';

interface ColorFieldProps extends WithStyles<typeof styles> {
  /** The label of the field */
  label: string;
  /** The value of the field */
  value?: string;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Called when the value changes */
  onChange?: (value: string) => any;
}

interface ColorFieldState {
  open: boolean;
}

interface Color {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

export class ColorField extends React.Component<
  ColorFieldProps,
  ColorFieldState
> {
  static defaultProps = {
    error: false,
    disabled: false,
    onChange: () => {
      return;
    },
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

  handleChange = ({ rgb, hex }: Color) => {
    const { onChange } = this.props;
    // Call onChange with an rgba string is there is opacity, otherwise return hex.
    onChange(rgb.a ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})` : hex);
  };

  render() {
    const { label, value, disabled, classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <PopoverAnchor>
          <Button disabled={disabled} onClick={this.openPicker}>
            <div className={classes.color} style={{ backgroundColor: value }} />
            {label}
          </Button>
          <Popover
            anchor={['top', 'left']}
            to={['bottom', 'left']}
            open={open}
            onOverlayClick={this.closePicker}
          >
            <ChromePicker
              color={value || 'transparent'}
              onChangeComplete={this.handleChange}
            />
          </Popover>
        </PopoverAnchor>
      </div>
    );
  }
}

export default withStyles(styles)(ColorField);
