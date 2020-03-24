import * as cn from 'classnames';
import * as isTouchDevice from 'is-touch-device';
import * as React from 'react';
import Checkbox from '../../core/Checkbox';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import styles from './ImagePickerFieldOption.styles';

export interface ImagePickerFieldOptionProps extends WithStyles<typeof styles> {
  // the image ID
  value: string;
  url: string;
  // These props are injected by the parent ImagePickerField.
  checked?: boolean;
  onClick?: () => any;
}

interface ImagePickerFieldOptionState {
  isHover: boolean;
}

export class ImagePickerFieldOption extends React.Component<
  ImagePickerFieldOptionProps,
  ImagePickerFieldOptionState
> {
  static defaultProps = {
    checked: false,
  };

  state = {
    isHover: false,
  };

  handleMouseOver = () => {
    this.setState({ isHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    const { classes, url, checked, onClick } = this.props;
    const { isHover } = this.state;

    const shouldShowOverlay = isHover || checked;
    const shouldAddMouseEvents = !isTouchDevice();

    return (
      <div className={classes.root}>
        <div
          className={cn(classes.inner, onClick && classes.clickable)}
          onMouseOver={shouldAddMouseEvents ? this.handleMouseOver : null}
          onMouseLeave={shouldAddMouseEvents ? this.handleMouseLeave : null}
          onClick={onClick}
        >
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
          {shouldShowOverlay && <div className={classes.overlay} />}
          {checked && (
            <div className={classes.topLeft}>
              <Checkbox
                round
                checked={checked}
                onClick={e => e.preventDefault()}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withThemeSelector(
  withStyles(styles)(ImagePickerFieldOption),
  'dark',
);
