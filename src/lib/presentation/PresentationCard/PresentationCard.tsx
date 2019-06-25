import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import PresentationThumbnail, {
  PresentationThumbnailProps,
} from '../PresentationThumbnail';
import styles from './PresentationCard.styles';

interface PresentationCardProps
  extends WithStyles<typeof styles>,
    PresentationThumbnailProps {
  disabled: boolean;
}

export const PresentationCard: React.SFC<PresentationCardProps> = ({
  classes,
  presentation,
  disabled,
  ...thumbnailProps
}) => (
  <div className={cn(classes.root, disabled && classes.disabled)}>
    <div className={classes.thumbnail}>
      <PresentationThumbnail
        presentation={presentation}
        {...thumbnailProps}
        {...(disabled ? { onSelect: null, onEdit: null, onClick: null } : {})}
      />
    </div>
    <div className={classes.name}>{presentation.name}</div>
  </div>
);

export default withStyles(styles)(PresentationCard);
