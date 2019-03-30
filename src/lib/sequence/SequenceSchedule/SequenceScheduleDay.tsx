import * as moment from 'moment';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import {
  marginBetweenChildrenHorizontal,
  marginBetweenChildrenVertical,
} from '../../mixins';
import { Theme } from '../../theme';
import Text from '../../typography/Text';

export interface SequenceScheduleDayProps extends WithStyles<typeof styles> {
  date: Date;
}

const SequenceScheduleDay: React.FunctionComponent<
  SequenceScheduleDayProps
> = ({ children, classes, date }) => (
  <div className={classes.root}>
    <div className={classes.date}>
      <Text center nowrap>
        <div className={classes.dayOfMonth}>{moment(date).format('DD')}</div>
      </Text>
      <Text center muted nowrap>
        <div className={classes.dayOfWeek}>{moment(date).format('ddd')}</div>
      </Text>
    </div>
    <div className={classes.content}>{children}</div>
  </div>
);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      ...marginBetweenChildrenHorizontal(theme.spacing.unit),
    },
    content: {
      flex: 1,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      ...marginBetweenChildrenVertical(theme.spacing.unit * 1.5),
      overflow: 'hidden',
    },
    date: {
      width: theme.spacing.unit * 5,
    },
    dayOfMonth: {
      fontSize: theme.spacing.unit * 4.5,
      fontWeight: 300,
    },
    dayOfWeek: {
      textTransform: 'uppercase',
      fontWeight: 500,
    },
  });

export default withStyles(styles)(SequenceScheduleDay);
