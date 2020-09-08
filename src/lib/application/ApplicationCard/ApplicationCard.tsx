import * as cn from 'classnames';
import * as React from 'react';
import Link from '../../core/Link';
import withStyles, { WithStyles } from '../../core/withStyles';
import { testAttr } from '../../helpers';
import * as A from '../ApplicationTypes';
import styles from './ApplicationCard.styles';

interface ApplicationCardProps extends WithStyles<typeof styles> {
  application: A.Application;
  onClick?: () => void;
  auto?: boolean;
  testId?: string;
}

export const ApplicationCard: React.SFC<ApplicationCardProps> = ({
  classes,
  application,
  onClick,
  auto = false,
  testId,
}) => {
  const {
    name,
    thumbnailUrl,
    websiteUrl,
    strings,
  } = application.currentAppVersion;

  const cta = strings.callToAction || name;

  return (
    <div className={cn(classes.root, auto && classes.auto)}>
      <button
        className={classes.thumbnail}
        onClick={onClick}
        {...testAttr(testId)}
      >
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
      </button>
      {cta && <div className={classes.cta}>{cta}</div>}
      {websiteUrl && (
        <div className={classes.website}>
          <Link href={websiteUrl} target="_blank">
            Learn More
          </Link>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(ApplicationCard);
