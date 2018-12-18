import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import * as A from '../ApplicationTypes';
import styles from './ApplicationCard.styles';

interface ApplicationCardProps extends WithStyles<typeof styles> {
  application: A.AppVersion;
  onClick?: () => void;
  auto?: boolean;
}

export const ApplicationCard: React.SFC<ApplicationCardProps> = ({
  classes,
  application,
  onClick,
  auto = false,
}) => (
  <div className={cn(classes.root, auto && classes.auto)}>
    <button className={classes.thumbnail} onClick={onClick}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${application.thumbnailUrl})` }}
      />
    </button>
    <div className={classes.name}>{application.strings.callToAction}</div>
  </div>
);

export default withStyles(styles)(ApplicationCard);
