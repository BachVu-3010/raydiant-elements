import * as moment from 'moment';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import withVisibility from '../../internal/Scroll/withVisibility';
import { Theme } from '../../theme';
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
    const { children, classes } = this.props;
    return (
      <div ref={this.props.visibleElementRef} className={classes.root}>
        {children}
      </div>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
    },
  });

export default withSequenceScheduleContext(
  withVisibility(withStyles(styles)(SequenceScheduleMonth)),
);
