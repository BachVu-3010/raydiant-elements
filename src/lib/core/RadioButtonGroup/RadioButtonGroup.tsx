import cn from 'classnames';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../withStyles';
import Option, { OptionProps } from './Option';

interface RadioButtonGroupProps {
  onChange: (selectedValues: string[]) => void;
  name?: string;
  fullWidth?: boolean;
  selectedValues?: string[];
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
    const { children, classes, name, fullWidth } = this.props;
    const { selectedValues } = this.state;
    return (
      <div className={cn(classes.root, fullWidth && classes.fullWidth)}>
        {React.Children.map(
          children,
          (child: React.ReactElement<OptionProps>) =>
            React.cloneElement(child, {
              selected: selectedValues.includes(child.props.value),
              name,
              onChange: this.handleChange,
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
