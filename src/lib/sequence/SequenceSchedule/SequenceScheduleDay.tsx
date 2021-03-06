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
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      ...marginBetweenChildrenHorizontal(theme.spacing(1)),
    },
    content: {
      flex: 1,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      ...marginBetweenChildrenVertical(theme.spacing(1.5)),
    },
    date: {
      width: theme.spacing(5),
    },
    dayOfMonth: {
      fontSize: theme.spacing(4.5),
      marginTop: 6,
      marginBottom: 2,
      fontWeight: 300,
      lineHeight: 1,
    },
    dayOfWeek: {
      textTransform: 'uppercase',
      fontWeight: 500,
    },
  });

export default withStyles(styles)(SequenceScheduleDay);
