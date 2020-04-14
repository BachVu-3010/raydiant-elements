import * as cn from 'classnames';
import * as React from 'react';
import {
  hasMissingChildValue,
  isElementSelected,
  sortChildrenBySelected,
} from '../../helpers';
import FormHelperText from '../../internal/FormHelperText';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MultiSelectField.styles';
import MultiSelectFieldOption, {
  MultiSelectFieldOptionProps,
} from './MultiSelectFieldOption';

type MultiSelectFieldChild = React.ReactElement<MultiSelectFieldOptionProps>;

interface MultiSelectFieldProps extends WithStyles<typeof styles> {
  label: string;
  value: string[];
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  onChange: (value: string[]) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  children?: MultiSelectFieldChild[];
}

interface MultiSelectFieldState {
  orderedChildren: MultiSelectFieldChild[];
}

export class MultiSelectField extends React.Component<
  MultiSelectFieldProps,
  MultiSelectFieldState
> {
  static defaultProps: Partial<MultiSelectFieldProps> = {
    disabled: false,
    error: false,
    helperText: '',
    children: [],
  };

  static getDerivedStateFromProps(
    props: MultiSelectFieldProps,
    state: MultiSelectFieldState,
  ) {
    // Only reorder children on mount and when the child options have changed.
    // We don't want to reorder as the user selects items.
    const shouldSortChildren = hasMissingChildValue(
      state.orderedChildren,
      props.children,
    );

    return shouldSortChildren
      ? { orderedChildren: sortChildrenBySelected(props.value, props.children) }
      : null;
  }

  state: MultiSelectFieldState = {
    orderedChildren: [],
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
            const isOptionSelected = isElementSelected(value, child);
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
