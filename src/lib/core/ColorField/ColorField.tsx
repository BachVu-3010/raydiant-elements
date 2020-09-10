import * as React from 'react';
import Popover from '@material-ui/core/Popover';
import ChromePicker from 'react-color/lib/Chrome';
import Button from '../Button';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ColorField.styles';

interface ColorFieldProps extends WithStyles<typeof styles> {
  /** The label of the field */
  label?: React.ReactNode;
  /** The value of the field */
  value?: string;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Set to true to make the button expand to it's container */
  fullWidth?: boolean;
  testId?: string;
  /** Called when the value changes */
  onChange?: (value: string) => any;
  /** Called when the picker is closed */
  onClose?: () => any;
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
    onClose: () => {
      return;
    },
  };

  buttonRef = React.createRef<HTMLElement | null>();

  state = {
    open: false,
  };

  openPicker = () => {
    this.setState({ open: true });
  };

  closePicker = () => {
    const { onClose } = this.props;
    this.setState({ open: false });
    onClose();
  };

  handleChange = ({ rgb, hex }: Color) => {
    const { onChange } = this.props;
    // Call onChange with an rgba string is there is opacity, otherwise return hex.
    onChange(rgb.a ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})` : hex);
  };

  render() {
    const {
      children,
      label,
      fullWidth,
      value,
      disabled,
      classes,
      testId,
    } = this.props;

    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Button
          ref={this.buttonRef}
          disabled={disabled}
          fullWidth={fullWidth}
          onClick={this.openPicker}
          testId={testId}
        >
          <div className={classes.color} style={{ backgroundColor: value }} />
          {children || label}
        </Button>
        <Popover
          open={open}
          anchorEl={this.buttonRef.current}
          onClose={this.closePicker}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <ChromePicker
            color={value || 'transparent'}
            onChange={this.handleChange}
          />
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles)(ColorField);
