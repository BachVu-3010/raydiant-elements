import * as moment from 'moment';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import withVisibility from '../../internal/Scroll/withVisibility';
import { Theme } from '../../theme';
import Heading2 from '../../typography/Heading2';
import { withSequenceScheduleContext } from './SequenceScheduleContext';

export interface SequenceScheduleMonthProps extends WithStyles<typeof styles> {
  date: string | Date;
  isPartiallyVisible?: boolean;
  visibleElementRef?: React.RefObject<HTMLDivElement>;
  setMonthVisibility?: (month: Date, isVisible: boolean) => void;
}

class SequenceScheduleMonth extends React.Component<
  SequenceScheduleMonthProps
> {
  componentDidUpdate() {
    const { date, isPartiallyVisible, setMonthVisibility } = this.props;
    setMonthVisibility(moment(date).toDate(), isPartiallyVisible);
  }

  render() {
    const { children, classes, date } = this.props;
    return (
      <div ref={this.props.visibleElementRef} className={classes.root}>
        <div className={classes.header}>
          <Heading2>{moment(date).format('MMMM YYYY')}</Heading2>
        </div>
        {children}
      </div>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    header: {
      paddingLeft: theme.spacing(9),
      paddingRight: theme.spacing(2),
    },
  });

export default withSequenceScheduleContext(
  withVisibility(withStyles(styles)(SequenceScheduleMonth)),
);
