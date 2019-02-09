import * as React from 'react';
import ChromePicker from 'react-color/lib/Chrome';
import { testAttr } from '../../helpers';
import Button from '../Button';
import Popover from '../Popover';
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
        <Popover.Anchor fullWidth={fullWidth}>
          <Button
            disabled={disabled}
            onClick={this.openPicker}
            fullWidth={fullWidth}
            {...testAttr(testId)}
          >
            <div className={classes.color} style={{ backgroundColor: value }} />
            {children || label}
          </Button>
          <Popover
            anchor={['top', 'left']}
            to={['bottom', 'left']}
            open={open}
            height="auto"
            width="auto"
            onOverlayClick={this.closePicker}
          >
            <ChromePicker
              color={value || 'transparent'}
              onChangeComplete={this.handleChange}
            />
          </Popover>
        </Popover.Anchor>
      </div>
    );
  }
}

export default withStyles(styles)(ColorField);
