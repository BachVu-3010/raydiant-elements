import * as React from 'react';
import Button from '../../core/Button';
import withStyles, { WithStyles } from '../../core/withStyles';
import ApplicationCard from '../ApplicationCard';
import * as A from '../ApplicationTypes';
import styles from './ApplicationCTA.styles';

interface ApplicationCTAProps extends WithStyles<typeof styles> {
  title: string;
  applications: A.AppVersion[];
  onApplicationClick?: (applicationId: string) => void;
  onMore?: () => void;
}

export const ApplicationCTA: React.SFC<ApplicationCTAProps> = ({
  classes,
  title,
  applications,
  onApplicationClick = () => {
    return;
  },
  onMore,
}) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.applications}>
        <ApplicationCard
          auto
          application={applications[0]}
          onClick={() => onApplicationClick(applications[0].id)}
          smDownShrink={false}
        />
        <ApplicationCard
          auto
          application={applications[1]}
          onClick={() => onApplicationClick(applications[1].id)}
          smDownShrink={false}
        />
        <ApplicationCard
          auto
          application={applications[2]}
          onClick={() => onApplicationClick(applications[2].id)}
          smDownShrink={false}
        />
      </div>
      <div className={classes.actions}>
        <Button label="More Options" onClick={onMore} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(ApplicationCTA);
