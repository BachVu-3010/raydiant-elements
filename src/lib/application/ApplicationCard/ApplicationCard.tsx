import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { testAttr } from '../../helpers';
import * as A from '../ApplicationTypes';
import styles from './ApplicationCard.styles';

interface ApplicationCardProps extends WithStyles<typeof styles> {
  application: A.Application;
  onClick?: () => void;
  auto?: boolean;
  smDownShrink?: boolean;
  testId?: string;
}

export const ApplicationCard: React.SFC<ApplicationCardProps> = ({
  classes,
  application,
  onClick,
  auto = false,
  smDownShrink = true,
  testId,
}) => (
  <div
    className={cn(
      classes.root,
      auto && classes.auto,
      smDownShrink && classes.smDownShrink,
    )}
  >
    <button
      className={classes.thumbnail}
      onClick={onClick}
      {...testAttr(testId)}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${application.currentAppVersion.thumbnailUrl})`,
        }}
      />
    </button>
    <div className={classes.name}>
      {application.currentAppVersion.strings.callToAction ||
        application.currentAppVersion.name}
    </div>
  </div>
);

export default withStyles(styles)(ApplicationCard);
