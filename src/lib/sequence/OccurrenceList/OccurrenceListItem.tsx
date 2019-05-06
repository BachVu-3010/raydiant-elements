import cn from 'classnames';
import * as moment from 'moment';
import * as React from 'react';
import Icon from '../../core/Icon';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { testAttr } from '../../helpers';
import { Theme } from '../../theme';
import Heading2 from '../../typography/Heading2';
import Text from '../../typography/Text';

export interface OccurrenceListItemProps extends WithStyles<typeof styles> {
  name: string;
  badge?: React.ReactNode;
  start: Date;
  end: Date;
  overridden?: boolean;
  locked?: boolean;
  recurring?: boolean;
  onClick?: React.ReactEventHandler;
  testId?: string;
}

export const OccurrenceListItem: React.FunctionComponent<
  OccurrenceListItemProps
> = ({
  classes,
  name,
  start,
  end,
  overridden,
  locked,
  recurring,
  onClick,
  testId,
}) => {
  const startTime = moment(start);
  const endTime = moment(end);
  const sameDate = startTime.isSame(endTime, 'date');
  const sameYear = startTime.year() === endTime.year();

  let dateFormat = 'h:mm A';
  if (!sameDate && !sameYear) {
    dateFormat = `${dateFormat} (MMM D, YY)`;
  } else if (!sameDate) {
    dateFormat = `${dateFormat} (MMM D)`;
  }

  const startTimeText = startTime.format(dateFormat);
  const endTimeText = endTime.format(dateFormat);

  const occurrenceName = overridden ? (
    <Text small strikethrough ellipsis>
      {name}
    </Text>
  ) : (
    <Heading2 ellipsis>{name}</Heading2>
  );

  return (
    <div
      onClick={onClick}
      className={cn(classes.root, onClick && classes.clickable)}
      {...testAttr(testId)}
    >
      <div className={cn(classes.content, overridden && classes.overridden)}>
        {occurrenceName}
        <div className={classes.duration}>
          <Text small muted ellipsis={!overridden}>
            {startTimeText}
          </Text>
          <Text small muted>
            &nbsp;–&nbsp;
          </Text>
          <Text small muted ellipsis={!overridden}>
            {endTimeText}
          </Text>
        </div>
      </div>
      <div className={classes.badges}>
        {recurring && (
          <Icon icon="repeat" className={cn(classes.badge, classes.repeat)} />
        )}
        {locked && (
          <Icon icon="lock" className={cn(classes.badge, classes.lock)} />
        )}
      </div>
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: theme.palette.divider,
      ['&:first-child']: {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
      },
      ['&:last-child']: {
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
      },
      backgroundColor: theme.palette.background.default,
      whiteSpace: 'nowrap',
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    overridden: {
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    duration: {
      display: 'flex',
      flexShrink: 0,
      flexWrap: 'wrap',
    },
    badges: {
      flex: 0,
    },
    badge: {
      color: theme.palette.background.default,
      ['&:first-child']: {
        borderBottomLeftRadius: 2,
      },
    },
    lock: {
      backgroundColor: theme.palette.warning.main,
      // shrink lock icon to match line thickness of repeat icon
      padding: 2,
      boxSizing: 'border-box',
    },
    repeat: {
      backgroundColor: theme.palette.progress.main,
    },
    clickable: {
      cursor: 'pointer',
    },
  });

export default withStyles(styles)(OccurrenceListItem);
