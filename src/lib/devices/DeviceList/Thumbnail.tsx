import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';

export interface ThumbnailProps extends WithStyles<typeof styles> {
  src?: string;
  showMultipleThumbnails: boolean;
}

const styles = () =>
  createStyles({
    root: {
      width: 128,
      height: 72,
      flexShrink: 0,
      position: 'relative',
    },
    thumbnailBackground: {
      background: 'rgba(0,0,0,1)',
      boxShadow: '0 1px 3px 0 rgba(0,0,0,.6)',
    },
    thumbnailDevice: {
      backgroundSize: '100% 100%',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
    },
    thumbnailGroup: {
      position: 'absolute',
    },
    thumbnailGroupFront: {
      top: 0,
      left: 0,
      height: 63,
      width: 112,
    },
    thumbnailGroupBack: {
      bottom: 0,
      right: 0,
      opacity: 0.5,
      height: 63,
      width: 112,
    },
  });

export const Thumbnail: React.SFC<ThumbnailProps> = ({
  classes,
  showMultipleThumbnails,
  src,
}) => (
  <div className={classes.root}>
    {showMultipleThumbnails ? (
      <>
        <div
          style={{ backgroundImage: `url(${src})` }}
          className={cn(
            classes.thumbnailGroup,
            classes.thumbnailBackground,
            classes.thumbnailGroupBack,
          )}
        />

        <div
          style={{ backgroundImage: `url(${src})` }}
          className={cn(
            classes.thumbnailGroup,
            classes.thumbnailBackground,
            classes.thumbnailGroupFront,
          )}
        />
      </>
    ) : (
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={cn(classes.thumbnailBackground, classes.thumbnailDevice)}
      />
    )}
  </div>
);

export default withStyles(styles)(Thumbnail);
