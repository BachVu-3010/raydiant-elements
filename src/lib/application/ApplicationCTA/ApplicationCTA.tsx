import * as React from 'react';
import Button from '../../core/Button';
import withStyles, { WithStyles } from '../../core/withStyles';
import ApplicationCard from '../ApplicationCard';
import * as A from '../ApplicationTypes';
import styles from './ApplicationCTA.styles';

interface ApplicationCTAProps extends WithStyles<typeof styles> {
  title: string;
  applications: A.Application[];
  onApplicationClick?: (applicationId: string) => void;
  onMore?: () => void;
  testId?: string;
}

export const ApplicationCTA: React.SFC<ApplicationCTAProps> = ({
  classes,
  title,
  applications,
  onApplicationClick = () => {
    return;
  },
  onMore,
  testId,
}) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.applications}>
        {applications[0] && (
          <ApplicationCard
            auto
            application={applications[0]}
            onClick={() => onApplicationClick(applications[0].id)}
            testId={testId ? `${testId}-${applications[0].id}` : ''}
          />
        )}
        {applications[1] && (
          <ApplicationCard
            auto
            application={applications[1]}
            onClick={() => onApplicationClick(applications[1].id)}
            testId={testId ? `${testId}-${applications[1].id}` : ''}
          />
        )}
        {applications[2] && (
          <ApplicationCard
            auto
            application={applications[2]}
            onClick={() => onApplicationClick(applications[2].id)}
            testId={testId ? `${testId}-${applications[2].id}` : ''}
          />
        )}
      </div>
      <div className={classes.actions}>
        <Button
          label="More Options"
          onClick={onMore}
          testId={testId ? `${testId}-more` : ''}
        />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(ApplicationCTA);
