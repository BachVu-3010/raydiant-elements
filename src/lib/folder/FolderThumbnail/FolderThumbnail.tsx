import * as cn from 'classnames';
import * as React from 'react';
import * as isTouchDevice from 'is-touch-device';
import Checkbox from '../../core/Checkbox';
import Scrollable from '../../layout/Scrollable';
import withStyles, { WithStyles } from '../../core/withStyles';
import { stopPropagation, testAttr } from '../../helpers';
import styles from './FolderThumbnail.styles';

export interface FolderThumbnailProps {
  selected?: boolean;
  showControls?: boolean;
  onSelect?: (selected: boolean) => any;
  onClick?: () => any;
  testId?: string;
}

interface FolderThumbnailPropsWithStyles
  extends WithStyles<typeof styles>,
    FolderThumbnailProps {}

export const FolderThumbnail: React.SFC<FolderThumbnailPropsWithStyles> = ({
  classes,
  selected,
  showControls,
  onSelect,
  onClick,
  testId,
}) => {
  const [isHover, setHover] = React.useState(false);
  const hasControls = !!onSelect;
  const shouldShowControls = showControls || (hasControls && isHover);
  const shouldShowSelect = (onSelect && shouldShowControls) || selected;
  const shouldShowOverlay = shouldShowControls || selected || isHover;

  // Don't attached mouse over / leave for touch devices.
  const shouldAddMouseEvents = !isTouchDevice();

  return (
    <div
      className={cn(classes.root, onClick && classes.clickable)}
      onClick={onClick}
      {...(shouldAddMouseEvents
        ? {
            onMouseOver: () => setHover(true),
            onMouseLeave: () => setHover(false),
          }
        : {})}
      {...testAttr(testId)}
    >
      <div
        className={cn(classes.image, shouldShowOverlay && classes.overlay)}
      />
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
};

export default withStyles(styles)(FolderThumbnail);
