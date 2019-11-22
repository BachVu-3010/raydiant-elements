import * as cn from 'classnames';
import * as isTouchDevice from 'is-touch-device';
import * as React from 'react';
import Button from '../../core/Button';
import Checkbox from '../../core/Checkbox';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import { stopPropagation, testAttr } from '../../helpers';
import styles from './PlaylistThumbnail.styles';

export interface PlaylistThumbnailProps {
  selected?: boolean;
  onEdit?: () => any;
  onSelect?: (selected: boolean) => any;
  onClick?: () => any;
  showControls?: boolean;
  testId?: string;
}

interface PlaylistThumbnailPropsWithStyles
  extends WithStyles<typeof styles>,
    PlaylistThumbnailProps {}

interface PlaylistThumbnailState {
  isHover: boolean;
  editPopoverOpen: boolean;
}

export class PlaylistThumbnail extends React.Component<
  PlaylistThumbnailPropsWithStyles,
  PlaylistThumbnailState
> {
  static defaultProps = {
    selected: false,
    showControls: false,
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
      selected,
      showControls,
      onEdit,
      onSelect,
      onClick,
      testId,
    } = this.props;
    const { isHover } = this.state;

    const imageUrl = 'https://assets.raydiant.com/playlist-thumbnail.svg';
    const hasControls = onEdit || onSelect;
    const shouldShowControls = hasControls && (showControls || isHover);
    const shouldShowEdit = onEdit && shouldShowControls;
    const shouldShowSelect = (onSelect && shouldShowControls) || selected;
    const shouldShowOverlay = shouldShowControls || selected;

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
        {shouldShowOverlay && <div className={classes.overlay} />}
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
        {shouldShowSelect && (
          <div className={classes.topLeft}>
            <Checkbox
              round
              checked={selected}
              onChange={onSelect}
              onClick={stopPropagation()}
              testId={testId ? `${testId}-select` : ''}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withThemeSelector(withStyles(styles)(PlaylistThumbnail), 'dark');