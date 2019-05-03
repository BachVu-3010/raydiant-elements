import { createStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import withStyles from '../../core/withStyles';
import { pluralize } from '../../helpers/pluralize';
import Column from '../../layout/Column';
import Row from '../../layout/Row/index';
import * as S from '../../sequence/sequenceTypes';
import Text from '../../typography/Text';
import RadioButtonGroup from '../RadioButtonGroup';
import SelectField from '../SelectField';

export interface RecurrenceSelectorProps extends WithStyles {
  onChange?: (recurrenceRule: Partial<S.RecurrenceRule>) => any;
  recurrenceRule?: Partial<S.RecurrenceRule>;
}

interface RecurrenceSelectorState {
  recurrenceRule: Partial<S.RecurrenceRule>;
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

const initialValues: Partial<S.RecurrenceRule> = {
  freq: S.Frequency.weekly,
  interval: 1,
  byday: [],
  bymonthday: '',
};
export class RecurrenceSelector extends React.Component<
  RecurrenceSelectorProps,
  RecurrenceSelectorState
> {
  static defaultProps = {
    onChange: () => {
      return;
    },
  };
  state: RecurrenceSelectorState = {
    recurrenceRule: this.props.recurrenceRule || initialValues,
  };
  componentWillMount() {
    this.props.onChange(this.state.recurrenceRule);
  }
  updateRecurrenceRule = (recurrenceRule: Partial<S.RecurrenceRule>) => {
    this.setState(
      { recurrenceRule: { ...this.state.recurrenceRule, ...recurrenceRule } },
      () => {
        this.props.onChange(this.state.recurrenceRule);
      },
    );
  };
  handleFrequencyChange = (value: S.Frequency) => {
    this.setState(
      {
        recurrenceRule: {
          // reset form values when frequency changes
          ...initialValues,
          freq: value,
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
    const { classes } = this.props;

    return (
      <Column>
        <Text bold small>
          REPEAT EVERY
        </Text>
        <Row>
          <div className={classes.intervalSelector}>
            <SelectField
              value={interval.toString()}
              onChange={value =>
                this.updateRecurrenceRule({ interval: parseInt(value, 10) })
              }
              testId="recurrence-interval"
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
              testId="recurrence-frequency"
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
              value={bymonthday}
              onChange={value =>
                this.updateRecurrenceRule({ bymonthday: value })
              }
              shrink
              testId="recurrence-bymonthday"
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
            <RadioButtonGroup
              onChange={(value: Array<keyof typeof S.DaysOfWeek>) =>
                this.updateRecurrenceRule({ byday: value })
              }
              selectedValues={byday}
              testId="recurrence-byday"
            >
              {Object.entries(S.DaysOfWeek).map(([value, label]) => (
                <RadioButtonGroup.Option key={value} value={value}>
                  {label}
                </RadioButtonGroup.Option>
              ))}
            </RadioButtonGroup>
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
