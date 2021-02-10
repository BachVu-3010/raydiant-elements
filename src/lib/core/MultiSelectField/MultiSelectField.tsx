import * as cn from 'classnames';
import * as React from 'react';
import {
  hasMissingChildValue,
  isElementSelected,
  sortChildrenBySelected,
} from '../../helpers';
import InputLabel from '../InputLabel';
import InputHelperText from '../InputHelperText';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MultiSelectField.styles';
import MultiSelectFieldOption, {
  MultiSelectFieldOptionProps,
} from './MultiSelectFieldOption';
import SearchBox, {DEFAULT_SORT_MODE, SortMode, SortType} from './SearchBox';

export type MultiSelectFieldChild = React.ReactElement<MultiSelectFieldOptionProps>;

interface MultiSelectFieldProps extends WithStyles<typeof styles> {
  label: string;
  value: string[];
  disabled?: boolean;
  searchable?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  onChange: (value: string[]) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  children?: MultiSelectFieldChild[];
}

interface MultiSelectFieldState {
  orderedChildren: MultiSelectFieldChild[];
  searchTerm: string;
  sortMode: SortMode;
}

export class MultiSelectField extends React.Component<
  MultiSelectFieldProps,
  MultiSelectFieldState
> {
  static defaultProps: Partial<MultiSelectFieldProps> = {
    disabled: false,
    searchable: false,
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
    searchTerm: '',
    sortMode: DEFAULT_SORT_MODE,
  };

  sortChildren = () => {
    const { sortMode } = this.state;
    // avoid mutating the orderedChildren in state
    const orderedChildren = [...this.state.orderedChildren];
    if (sortMode.type === SortType.Name) {
      orderedChildren.sort(
        (c1, c2) => (c1.props.label || '').localeCompare(c2.props.label || '')
      );
    }
    if (sortMode.isReverseSort) {
      orderedChildren.reverse();
    }
    return orderedChildren;
  };

  render() {
    const {
      label,
      value,
      onChange,
      disabled,
      searchable,
      helperText,
      error,
      classes,
      onBlur,
    } = this.props;
    const { searchTerm } = this.state;

    let orderedChildren = this.sortChildren();
    if (searchable && searchTerm) {
      orderedChildren = orderedChildren.filter(
        child => (child.props.label || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return (
      <div className={classes.root} onBlur={onBlur}>
        <InputLabel error={error}>{label}</InputLabel>
        <div className={cn(classes.contentWrapper, {[classes.withSearch]: searchable})}>
          { searchable && (
            <SearchBox
              value={value}
              options={orderedChildren}
              searchTerm={searchTerm}
              disabled={disabled}
              onChange={onChange}
              onSearchChange={newSearchTerm => this.setState({searchTerm: newSearchTerm})}
              onSortChange={(newSortMode) => this.setState({sortMode: newSortMode})}
            />
          ) }
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
        </div>
        <InputHelperText error={error}>{helperText}</InputHelperText>
      </div>
    );
  }
}

export default Object.assign(withStyles(styles)(MultiSelectField), {
  Option: MultiSelectFieldOption,
});
