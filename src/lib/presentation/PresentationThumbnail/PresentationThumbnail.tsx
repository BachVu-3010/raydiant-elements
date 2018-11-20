import * as cn from 'classnames';
import * as isTouchDevice from 'is-touch-device';
import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Button from '../../core/Button';
import Checkbox from '../../core/Checkbox';
import CircularProgress from '../../core/CircularProgress';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import { stopPropagation } from '../../helpers';
import * as T from '../PresentationTypes';
import styles from './PresentationThumbnail.styles';

interface PresentationThumbnailProps extends WithStyles<typeof styles> {
  presentation: T.Presentation;
  selected?: boolean;
  onEdit?: () => any;
  onSelect?: (selected: boolean) => any;
  onClick?: () => any;
  showControls?: boolean;
  showControlsOnHover?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
}

interface PresentationThumbnailState {
  isHover: boolean;
}

export class PresentationThumbnail extends React.Component<
  PresentationThumbnailProps,
  PresentationThumbnailState
> {
  static defaultProps = {
    selected: false,
    showControls: false,
    showControlsOnHover: true,
    hasError: false,
    errorMessage: '',
    isLoading: false,
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
    const {
      classes,
      presentation,
      selected,
      showControls,
      showControlsOnHover,
      hasError,
      errorMessage,
      isLoading,
      onEdit,
      onSelect,
      onClick,
    } = this.props;
    const { isHover } = this.state;

    const imageUrl =
      presentation.thumbnailUrl || presentation.applicationThumbnailUrl;
    const shouldShowIcon =
      presentation.hasDynamicThumbnails && presentation.thumbnailUrl;
    const shouldShowControls = showControls || (showControlsOnHover && isHover);
    const shouldShowEdit =
      onEdit && shouldShowControls && !hasError && !isLoading;
    const shouldShowSelect = (onSelect && shouldShowControls) || selected;
    const shouldShowError = hasError && !shouldShowSelect;
    const shouldShowProgress = isLoading;
    const shouldShowOverlay =
      shouldShowControls || hasError || isLoading || selected;

    // Don't attached mouse over / leave for touch devices.
    const shouldAddMouseEvents = !isTouchDevice();

    return (
      <div
        className={cn(classes.root, onClick && classes.clickable)}
        onMouseOver={shouldAddMouseEvents ? this.handleMouseOver : null}
        onMouseLeave={shouldAddMouseEvents ? this.handleMouseLeave : null}
        onClick={onClick}
      >
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        {shouldShowIcon && (
          <div
            className={cn(classes.icon, classes.bottomLeft)}
            style={{
              backgroundImage: `url(${presentation.iconUrl})`,
            }}
          />
        )}
        {shouldShowOverlay && <div className={classes.overlay} />}
        {shouldShowEdit && (
          <div className={classes.topRight}>
            <Button icon="edit" onClick={stopPropagation(onEdit)} />
          </div>
        )}
        {shouldShowSelect && (
          <div className={classes.topLeft}>
            <Checkbox
              round
              checked={selected}
              onChange={onSelect}
              onClick={stopPropagation()}
            />
          </div>
        )}
        {shouldShowProgress && (
          <div className={classes.topRight}>
            <CircularProgress />
          </div>
        )}
        {shouldShowError && (
          <div className={cn(classes.topLeft, classes.error)}>
            <AlertIcon />
            <span className={classes.errorMessage}>{errorMessage}</span>
          </div>
        )}
      </div>
    );
  }
}

export default withThemeSelector(
  withStyles(styles)(PresentationThumbnail),
  'dark',
);
