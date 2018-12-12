import * as cn from 'classnames';
import * as React from 'react';
import FormHelperText from '../../internal/FormHelperText';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MultiSelectField.styles';
import MultiSelectFieldOption, {
  MultiSelectFieldOptionProps,
} from './MultiSelectFieldOption';

interface MultiSelectFieldProps extends WithStyles<typeof styles> {
  label: string;
  value: string[];
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  onChange: (value: string[]) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
}

interface MultiSelectFieldState {
  orderedChildren: Array<React.ReactElement<MultiSelectFieldOptionProps>>;
}

const isSelected = (
  value: string[],
  child: React.ReactElement<MultiSelectFieldOptionProps>,
) => {
  const optionValue = child.props.value;
  return value.includes(optionValue);
};

const sortChildrenBySelected = (value: string[], children: React.ReactNode) => {
  // We need to cast to React.ReactElement<any> here because
  // React.ReactChild does not allow us to access child.props.
  const array = React.Children.toArray(children) as Array<
    React.ReactElement<MultiSelectFieldOptionProps>
  >;
  // Move selected items to the top of the list.
  return array.sort((childA, childB) => {
    if (isSelected(value, childA) && !isSelected(value, childB)) {
      return -1;
    } else if (!isSelected(value, childA) && isSelected(value, childB)) {
      return 1;
    }
    return 0;
  });
};

export class MultiSelectField extends React.Component<
  MultiSelectFieldProps,
  MultiSelectFieldState
> {
  static defaultProps = {
    disabled: false,
    error: false,
    helperText: '',
  };

  static getDerivedStateFromProps(
    props: MultiSelectFieldProps & { children?: React.ReactNode },
    state: MultiSelectFieldState,
  ) {
    // Only reorder children on mount and when the # of children have
    // changed. We don't want to reorder as the user selects items.
    const shouldSortChildren =
      React.Children.count(props.children) !==
      React.Children.count(state.orderedChildren);

    return shouldSortChildren
      ? { orderedChildren: sortChildrenBySelected(props.value, props.children) }
      : null;
  }

  state = {
    orderedChildren: [] as Array<
      React.ReactElement<MultiSelectFieldOptionProps>
    >,
  };

  render() {
    const {
      label,
      value,
      onChange,
      disabled,
      helperText,
      error,
      classes,
      onBlur,
    } = this.props;

    const { orderedChildren } = this.state;

    return (
      <div className={classes.root} onBlur={onBlur}>
        <div className={cn(classes.label, error && classes.error)}>{label}</div>
        <div className={cn(classes.items, disabled && classes.disabled)}>
          {orderedChildren.map(child => {
            const isOptionSelected = isSelected(value, child);
            const optionValue = child.props.value;
            return React.cloneElement(child, {
              disabled,
              checked: isOptionSelected,
              onClick: () => {
                if (isOptionSelected) {
                  onChange(value.filter(item => item !== optionValue));
                } else {
                  onChange([...value, optionValue]);
                }
              },
            });
          })}
        </div>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </div>
    );
  }
}

export default Object.assign(withStyles(styles)(MultiSelectField), {
  Option: MultiSelectFieldOption,
});
