import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import PresentationThumbnail, {
  PresentationThumbnailProps,
} from '../PresentationThumbnail';
import styles from './PresentationCard.styles';

interface PresentationCardProps
  extends WithStyles<typeof styles>,
    PresentationThumbnailProps {}

export const PresentationCard: React.SFC<PresentationCardProps> = ({
  classes,
  presentation,
  ...thumbnailProps
}) => (
  <div className={classes.root}>
    <div className={classes.thumbnail}>
      <PresentationThumbnail presentation={presentation} {...thumbnailProps} />
    </div>
    <div className={classes.name}>{presentation.name}</div>
  </div>
);

export default withStyles(styles)(PresentationCard);
