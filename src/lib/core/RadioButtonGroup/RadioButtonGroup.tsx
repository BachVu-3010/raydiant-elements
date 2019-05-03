import cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import withStyles, { createStyles, WithStyles } from '../withStyles';
import Option, { OptionProps } from './Option';

interface RadioButtonGroupProps {
  onChange: (selectedValues: string[]) => void;
  fullWidth?: boolean;
  selectedValues?: string[];
  testId?: string;
}

interface RadioButtonGroupState {
  selectedValues: string[];
}

export class RadioButtonGroup extends React.Component<
  RadioButtonGroupProps & WithStyles<typeof styles>,
  RadioButtonGroupState
> {
  static defaultProps: RadioButtonGroupProps = {
    onChange: () => {
      return;
    },
    fullWidth: true,
    selectedValues: [],
  };

  state: RadioButtonGroupState = {
    selectedValues: this.props.selectedValues,
  };

  handleChange = (value: string) => {
    const { onChange } = this.props;
    this.setState(
      ({ selectedValues }) => {
        const isValueSelected = selectedValues.includes(value);
        return {
          selectedValues: isValueSelected
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value],
        };
      },
      () => {
        onChange(this.state.selectedValues);
      },
    );
  };

  render() {
    const { children, classes, fullWidth, testId } = this.props;
    const { selectedValues } = this.state;
    return (
      <div
        className={cn(classes.root, fullWidth && classes.fullWidth)}
        {...testAttr(testId)}
      >
        {React.Children.map(
          children,
          (child: React.ReactElement<OptionProps>, index) =>
            React.cloneElement(child, {
              selected: selectedValues.includes(child.props.value),
              onChange: this.handleChange,
              testId: testId && `${testId}-${index}`,
            }),
        )}
      </div>
    );
  }
}

const styles = () =>
  createStyles({
    root: {
      display: 'flex',
    },
    fullWidth: {
      width: '100%',
    },
  });

export default Object.assign(withStyles(styles)(RadioButtonGroup), {
  Option,
});
