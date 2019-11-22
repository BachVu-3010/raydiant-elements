import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import PlaylistThumbnail, {
  PlaylistThumbnailProps,
} from '../PlaylistThumbnail';
import * as PL from '../PlaylistTypes';
import styles from './PlaylistCard.styles';

interface PlaylistCardProps
  extends WithStyles<typeof styles>,
    PlaylistThumbnailProps {
  playlist: PL.Playlist;
}

export const PlaylistCard: React.SFC<PlaylistCardProps> = ({
  classes,
  playlist,
  ...thumbnailProps
}) => (
  <div className={classes.root}>
    <div className={classes.thumbnail}>
      <PlaylistThumbnail {...thumbnailProps} />
    </div>
    <div className={classes.name}>{playlist.name}</div>
  </div>
);

export default withStyles(styles)(PlaylistCard);
