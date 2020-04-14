import { createStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import withStyles from '../../core/withStyles';
import { pluralize } from '../../helpers/pluralize';
import Column from '../../layout/Column';
import Row from '../../layout/Row/index';
import * as S from '../../sequence/sequenceTypes';
import Text from '../../typography/Text';
import SelectField from '../SelectField';
import ToggleButtonGroup from '../ToggleButtonGroup';

export interface RecurrenceSelectorProps extends WithStyles {
  onChange?: (recurrenceRule: S.RecurrenceRule) => any;
  recurrenceRule?: S.RecurrenceRule | null;
  testId?: string;
}

interface RecurrenceSelectorState {
  recurrenceRule: S.RecurrenceRule;
}

const generateArrayRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from(Array(length).keys(), x => x + start);
};

const frequencies = {
  [S.Frequency.weekly]: {
    label: 'week',
    intervals: generateArrayRange(1, 10),
  },
  [S.Frequency.monthly]: {
    label: 'month',
    intervals: generateArrayRange(1, 12),
  },
};

const monthDayOptions = generateArrayRange(1, 31);

const initialValues: S.RecurrenceRule = {
  dtstart: '',
  freq: S.Frequency.weekly,
  interval: 1,
  byday: [],
  bymonthday: [],
};

export class RecurrenceSelector extends React.Component<
  RecurrenceSelectorProps,
  RecurrenceSelectorState
> {
  state: RecurrenceSelectorState = {
    recurrenceRule: { ...initialValues, ...this.props.recurrenceRule },
  };

  updateRecurrenceRule = (recurrenceRule: Partial<S.RecurrenceRule>) => {
    const updatedRecurrenceRule = {
      ...this.state.recurrenceRule,
      ...recurrenceRule,
    };

    this.setState({
      recurrenceRule: updatedRecurrenceRule,
    });

    this.props.onChange(updatedRecurrenceRule);
  };

  handleFrequencyChange = (value: S.Frequency) => {
    this.setState(
      {
        recurrenceRule: {
          ...this.state.recurrenceRule,
          freq: value,
          // reset form values when frequency changes
          interval: initialValues.interval,
          byday: initialValues.byday,
          bymonthday: initialValues.bymonthday,
        },
      },
      () => {
        this.props.onChange(this.state.recurrenceRule);
      },
    );
  };

  render() {
    const { recurrenceRule } = this.state;
    const { freq, interval, bymonthday, byday } = recurrenceRule;
    const { classes, testId } = this.props;

    return (
      <Column>
        <Text bold small>
          REPEAT EVERY
        </Text>
        <Row>
          <div className={classes.intervalSelector}>
            <SelectField
              value={String(interval)}
              onChange={value =>
                this.updateRecurrenceRule({ interval: parseInt(value, 10) })
              }
              testId={`${testId}-interval`}
            >
              {frequencies[freq].intervals.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </SelectField>
          </div>
          <div className={classes.frequencySelector}>
            <SelectField
              value={freq}
              onChange={this.handleFrequencyChange}
              testId={`${testId}-frequency`}
            >
              {Object.entries(frequencies).map(([k, { label }]) => (
                <option key={k} value={k}>
                  {pluralize(label, interval)}
                </option>
              ))}
            </SelectField>
          </div>
        </Row>

        <Text bold small>
          ON
        </Text>
        <div>
          {freq === S.Frequency.monthly && (
            <SelectField
              label="Day"
              value={bymonthday ? String(bymonthday[0]) : ''}
              onChange={value =>
                this.updateRecurrenceRule({
                  bymonthday: value ? [parseInt(value, 10)] : [],
                })
              }
              shrink
              testId={`${testId}-bymonthday`}
            >
              <option key="Use start date" value="">
                Use start date
              </option>
              {monthDayOptions.map(v => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
              <option key="Last" value={-1}>
                Last
              </option>
            </SelectField>
          )}
          {freq === S.Frequency.weekly && (
            <ToggleButtonGroup
              value={byday}
              onChange={(value: Array<keyof typeof S.DaysOfWeek>) =>
                this.updateRecurrenceRule({ byday: value })
              }
            >
              {Object.entries(S.DaysOfWeek).map(([value, label]) => (
                <ToggleButtonGroup.Button key={value} value={value}>
                  {label}
                </ToggleButtonGroup.Button>
              ))}
            </ToggleButtonGroup>
          )}
        </div>
      </Column>
    );
  }
}

const styles = () =>
  createStyles({
    frequencySelector: {
      flex: 7,
    },
    intervalSelector: {
      flex: 3,
    },
  });

export default withStyles(styles)(RecurrenceSelector);
