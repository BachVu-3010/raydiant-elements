import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import FolderThumbnail, { FolderThumbnailProps } from '../FolderThumbnail';
import * as F from '../FolderTypes';
import styles from './FolderCard.styles';

interface FolderCardProps
  extends WithStyles<typeof styles>,
    FolderThumbnailProps {
  folder: F.Folder;
  noShrink?: boolean;
}

export const FolderCard: React.SFC<FolderCardProps> = (
  { classes, folder, noShrink, ...thumbnailProps },
  ref,
) => (
  <div className={cn(classes.root, noShrink && classes.noShrink)}>
    <div ref={ref} className={classes.thumbnail}>
      <FolderThumbnail {...thumbnailProps} />
    </div>
    <div className={classes.name}>{folder.name}</div>
  </div>
);

export default withStyles(styles)(React.forwardRef(FolderCard));
