import * as moment from 'moment';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import stateChanged from '../../helpers/stateChanged';
import withScrollProvider from '../../internal/Scroll/withScrollProvider';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';
import Text from '../../typography/Text';
import SequenceScheduleContext from './SequenceScheduleContext';
import SequenceScheduleDay from './SequenceScheduleDay';
import SequenceScheduleMonth from './SequenceScheduleMonth';

interface SequenceScheduleProps extends WithStyles<typeof styles> {
  onScroll?: React.ReactEventHandler<HTMLDivElement>;
}

interface SequenceScheduleState {
  monthVisibility: Record<string, boolean>;
  currentMonth: Date;
}

export class SequenceSchedule extends React.Component<
  SequenceScheduleProps,
  SequenceScheduleState
> {
  state: SequenceScheduleState = {
    monthVisibility: {},
    currentMonth: moment()
      .startOf('month')
      .toDate(),
  };

  setMonthVisibility = (month: Date, visibility: boolean) => {
    const monthVisibility = {
      ...this.state.monthVisibility,
      [month.toISOString()]: visibility,
    };

    if (stateChanged(monthVisibility, this.state.monthVisibility)) {
      const currentMonth = Object.keys(monthVisibility)
        .filter(monthStr => monthVisibility[monthStr])
        .map(monthStr => new Date(monthStr))
        .sort((month1, month2) => +month1 - +month2)[0];
      this.setState({ currentMonth, monthVisibility });
    }
  };

  render() {
    const { children, classes, onScroll } = this.props;
    const { currentMonth } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.currentMonthHeader}>
          <Text muted nowrap>
            {moment(currentMonth).format('MMMM YYYY')}
          </Text>
        </div>
        <div className={classes.months} onScroll={onScroll}>
          <SequenceScheduleContext.Provider
            value={{
              setMonthVisibility: this.setMonthVisibility,
            }}
          >
            {children}
          </SequenceScheduleContext.Provider>
        </div>
      </div>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflow: 'hidden',
    },
    currentMonthHeader: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
      borderBottomColor: theme.palette.divider,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
    },
    months: {
      ...scrollable(),
      position: 'relative',
    },
  });

export default Object.assign(
  withScrollProvider(withThemeSelector(withStyles(styles)(SequenceSchedule))),
  {
    Day: SequenceScheduleDay,
    Month: SequenceScheduleMonth,
  },
);
