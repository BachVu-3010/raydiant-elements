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
import MultiSelectFieldSearchBox from './MultiSelectFieldSearchBox';

export enum MultiSelectFieldSortBy {
  default = 'default',
  label = 'label',
  rightLabel = 'rightLabel',
}
export type MultiSelectFieldSortType = 'string' | 'number' | 'boolean';

export interface MultiSelectFieldSortMode {
  label: string;
  by: MultiSelectFieldSortBy;
  type?: MultiSelectFieldSortType;
  isReverseSort: boolean;
}

export interface MultiSelectFieldSortOption {
  label: string;
  by: MultiSelectFieldSortBy;
  type?: MultiSelectFieldSortType;
  defaultDirection?: 'asc' | 'desc';
}

export type MultiSelectFieldChild = React.ReactElement<
  MultiSelectFieldOptionProps
>;

interface MultiSelectFieldProps extends WithStyles<typeof styles> {
  label: string;
  value: string[];
  disabled?: boolean;
  searchable?: boolean;
  selectable?: boolean;
  error?: boolean;
  sortable?: MultiSelectFieldSortOption[];
  helperText?: React.ReactNode;
  onChange: (value: string[]) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  children?: MultiSelectFieldChild[];
}

interface MultiSelectFieldState {
  orderedChildren: MultiSelectFieldChild[];
  searchTerm: string;
  sortMode?: MultiSelectFieldSortMode;
}

const toNumber = (value: string) => {
  const numberString = (value || '')
    .split('')
    .filter(c => c.match(/[.0-9]/g))
    .join('');
  return parseFloat(numberString);
};

const applyOrder = (
  children: MultiSelectFieldChild[],
  orderedChildren: MultiSelectFieldChild[],
) => {
  return orderedChildren
    .map((child: MultiSelectFieldChild) =>
      children.find(c => c.props.value === child.props.value),
    )
    .filter(c => c);
};

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
    sortable: [],
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

    if (shouldSortChildren) {
      return {
        orderedChildren: sortChildrenBySelected(props.value, props.children),
      };
    } else {
      return {
        orderedChildren: applyOrder(props.children, state.orderedChildren),
      };
    }
  }

  state: MultiSelectFieldState = {
    orderedChildren: [],
    searchTerm: '',
  };

  sortWith = (
    getter: (c: MultiSelectFieldChild) => string,
    sortType: MultiSelectFieldSortType,
  ) => (c1: MultiSelectFieldChild, c2: MultiSelectFieldChild) => {
    const value1 = getter(c1);
    const value2 = getter(c2);

    if (sortType === 'number') {
      const number1 = toNumber(String(value1));
      const number2 = toNumber(String(value2));
      return isNaN(number1) || number1 > number2 ? 1 : -1;
    } else if (sortType === 'boolean') {
      return value1 > value2 ? 1 : -1;
    }
    return (value1 || '').localeCompare(value2 || '');
  };

  sortChildren = () => {
    const { sortMode } = this.state;
    if (!sortMode) {
      return this.state.orderedChildren;
    }

    const orderedChildren = [...this.state.orderedChildren];
    if (sortMode.by === MultiSelectFieldSortBy.label) {
      orderedChildren.sort(
        this.sortWith(
          (c: MultiSelectFieldChild) => c.props.label,
          sortMode.type,
        ),
      );
    } else if (sortMode.by === MultiSelectFieldSortBy.rightLabel) {
      orderedChildren.sort(
        this.sortWith(
          (c: MultiSelectFieldChild) => c.props.rightLabel,
          sortMode.type,
        ),
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
      selectable,
      disabled,
      searchable,
      helperText,
      error,
      classes,
      onBlur,
      sortable,
    } = this.props;
    const { searchTerm } = this.state;

    let orderedChildren = this.sortChildren();
    if (searchable && searchTerm) {
      orderedChildren = orderedChildren.filter(child =>
        (child.props.label || '')
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      );
    }

    return (
      <div className={classes.root} onBlur={onBlur}>
        <InputLabel error={error}>{label}</InputLabel>
        <div
          className={cn(classes.contentWrapper, {
            [classes.withSearch]: searchable,
          })}
        >
          {searchable && (
            <MultiSelectFieldSearchBox
              value={value}
              options={orderedChildren}
              searchTerm={searchTerm}
              disabled={disabled}
              sortable={sortable}
              onChange={onChange}
              onSearchChange={newSearchTerm =>
                this.setState({ searchTerm: newSearchTerm })
              }
              onSortChange={newSortMode =>
                this.setState({ sortMode: newSortMode })
              }
            />
          )}
          <div className={cn(classes.items, disabled && classes.disabled)}>
            {orderedChildren.map(child => {
              const isOptionSelected = isElementSelected(value, child);
              const optionValue = child.props.value;
              return React.cloneElement(child, {
                disabled,
                selectable,
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
