import * as cn from 'classnames';
import * as isTouchDevice from 'is-touch-device';
import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Button from '../../core/Button';
import Checkbox from '../../core/Checkbox';
import CircularProgress from '../../core/CircularProgress';
import Icon from '../../core/Icon';
import Popover from '../../core/Popover';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import { stopPropagation, testAttr } from '../../helpers';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import Scrollable from '../../layout/Scrollable';
import * as T from '../PresentationTypes';
import styles from './PresentationThumbnail.styles';

export interface PresentationThumbnailProps {
  presentation: T.Presentation;
  selected?: boolean;
  onEdit?: () => any;
  onSelect?: (selected: boolean) => any;
  onClick?: () => any;
  showControls?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
  isLocked?: boolean;
  lockedMessage?: React.ReactNode;
  testId?: string;
}

interface PresentationThumbnailPropsWithStyles
  extends WithStyles<typeof styles>,
    PresentationThumbnailProps {}

interface PresentationThumbnailState {
  isHover: boolean;
  editPopoverOpen: boolean;
}

export class PresentationThumbnail extends React.Component<
  PresentationThumbnailPropsWithStyles,
  PresentationThumbnailState
> {
  static defaultProps = {
    selected: false,
    showControls: false,
    hasError: false,
    errorMessage: '',
    isLoading: false,
  };

  state = {
    isHover: false,
    editPopoverOpen: false,
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
      hasError,
      errorMessage,
      isLoading,
      onEdit,
      onSelect,
      onClick,
      isLocked,
      lockedMessage,
      testId,
    } = this.props;
    const { isHover, editPopoverOpen } = this.state;

    const imageUrl =
      presentation.thumbnailUrl || presentation.applicationThumbnailUrl;
    const hasControls = onEdit || onSelect;
    const shouldShowIcon =
      presentation.hasDynamicThumbnails && presentation.thumbnailUrl;
    const shouldShowControls = hasControls && (showControls || isHover);
    const shouldShowEdit = !isLocked && onEdit && shouldShowControls;
    const shouldShowSelect = (onSelect && shouldShowControls) || selected;
    const shouldShowError = hasError && !shouldShowSelect;
    const shouldShowLock = isLocked && shouldShowControls;
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
        {...testAttr(testId)}
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
        {shouldShowEdit && (
          <div
            className={shouldShowSelect ? classes.topRight : classes.topLeft}
          >
            <Button
              icon="edit"
              onClick={stopPropagation(onEdit)}
              testId={testId ? `${testId}-edit` : ''}
            />
          </div>
        )}
        {shouldShowLock && (
          <div className={classes.topLeft}>
            <Popover.Anchor>
              <Button
                icon="lock"
                onClick={stopPropagation(() => {
                  this.setState({ editPopoverOpen: true });
                })}
              />
              <Popover
                color="grey"
                open={editPopoverOpen}
                anchor={['top', 'left']}
                to={['bottom', 'left']}
                width="auto"
                onOverlayClick={() => {
                  this.setState({ editPopoverOpen: false });
                }}
              >
                <Popover.Header>
                  <Row>
                    <Icon icon="lock" />
                    <div style={{ width: 220 }}>{lockedMessage}</div>
                  </Row>
                </Popover.Header>
                <Popover.Footer>
                  <Spacer />
                  <Button
                    label="Got It"
                    onClick={() => {
                      this.setState({ editPopoverOpen: false });
                    }}
                  />
                </Popover.Footer>
              </Popover>
            </Popover.Anchor>
          </div>
        )}
        {shouldShowSelect && (
          <Scrollable.VisibilitySensor>
            {({ visibilityRef, isVisible }) => (
              <div ref={visibilityRef} className={classes.topLeft}>
                {isVisible && (
                  <Checkbox
                    round
                    checked={selected}
                    onChange={onSelect}
                    onClick={stopPropagation()}
                    testId={testId ? `${testId}-select` : ''}
                  />
                )}
              </div>
            )}
          </Scrollable.VisibilitySensor>
        )}
      </div>
    );
  }
}

export default withThemeSelector(
  withStyles(styles)(PresentationThumbnail),
  'dark',
);
