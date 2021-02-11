import * as React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MultiSelectFieldSearchBox.styles';
import Checkbox from '../Checkbox';
import ActionBar from '../ActionBar/v2';
import {
  MultiSelectFieldChild,
  MultiSelectFieldSortMode,
  MultiSelectFieldSortOption,
} from './MultiSelectField';
import { isElementSelected } from '../../helpers';
import MultiSelectFieldSortSelect from './MultiSelectFieldSortSelect';

interface MultiSelectFieldSearchBoxProps extends WithStyles<typeof styles> {
  value: string[];
  options: MultiSelectFieldChild[];
  searchTerm?: string;
  disabled?: boolean;
  onChange: (value: string[]) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (newSortMode: MultiSelectFieldSortMode) => void;
  sortable?: MultiSelectFieldSortOption[];
}

interface MultiSelectFieldSearchBoxState {
  isSearchMode: boolean;
  isSortMode: boolean;
  sortMode?: MultiSelectFieldSortMode;
}

export class SearchBox extends React.Component<
  MultiSelectFieldSearchBoxProps,
  MultiSelectFieldSearchBoxState
> {
  static defaultProps: Partial<MultiSelectFieldSearchBoxProps> = {
    value: [],
    options: [],
    searchTerm: '',
    disabled: false,
    sortable: [],
  };

  state: MultiSelectFieldSearchBoxState = {
    isSearchMode: false,
    isSortMode: false,
  };

  componentDidMount() {
    const { sortable, onSortChange } = this.props;
    const { sortMode } = this.state;

    const firstSortOption = sortable && sortable[0];
    if (firstSortOption && sortMode === undefined) {
      const defaultSortMode = {
        label: firstSortOption.label,
        by: firstSortOption.by,
        type: firstSortOption.type,
        isReverseSort: firstSortOption.defaultDirection === 'desc',
      };
      this.setState({ sortMode: defaultSortMode });
      onSortChange(defaultSortMode);
    }
  }

  render() {
    const {
      value,
      options,
      searchTerm,
      onChange,
      onSearchChange,
      onSortChange,
      disabled,
      classes,
      sortable,
    } = this.props;
    const { isSearchMode, isSortMode, sortMode } = this.state;

    const numChecked = options
      .map(option => isElementSelected(value, option))
      .filter(c => c).length;
    const checked = options.length > 0 && numChecked === options.length;
    const indeterminate =
      options.length > 0 && numChecked > 0 && numChecked < options.length;
    const showingValue = options.map(option => option.props.value);

    const multiSelectAction = (
      <Checkbox
        className={classes.checkBox}
        disabled={disabled}
        checked={checked}
        indeterminate={indeterminate}
        onClick={(e: React.MouseEvent<any>) => {
          e.preventDefault();
          if (checked || indeterminate) {
            onChange(value.filter(item => !showingValue.includes(item)));
          } else {
            const newValue = showingValue.filter(v => !value.includes(v));
            onChange([...value, ...newValue]);
          }
        }}
      />
    );

    const onSortOptionSelect = (newSortMode: MultiSelectFieldSortMode) => {
      this.setState({ isSortMode: false, sortMode: newSortMode });
      onSortChange(newSortMode);
    };
    const sortAction = sortable.length > 0 && (
      <ActionBar.Select
        icon={<FilterListIcon className={classes.sortIcon} />}
        open={isSortMode}
        onOpen={() =>
          this.setState(({ isSortMode: prevIsSortMode }) => ({
            isSortMode: !prevIsSortMode,
          }))
        }
        disabled={disabled}
      >
        {sortable.map((sortOption, index) => (
          <MultiSelectFieldSortSelect
            key={index}
            sortMode={sortMode}
            sortOption={sortOption}
            onSelect={onSortOptionSelect}
          />
        ))}
      </ActionBar.Select>
    );

    const searchAction = isSearchMode ? (
      <ActionBar.Input
        autoFocus
        label="Search"
        disabled={disabled}
        maxWidth={145}
        className={classes.searchInput}
        icon={
          <ActionBar.Action
            icon={<CloseIcon className={classes.closeIcon} />}
            onClick={(e: React.MouseEvent<any>) => {
              e.preventDefault();
              this.setState({ isSearchMode: false });
              onSearchChange('');
            }}
          />
        }
        value={searchTerm}
        onChange={onSearchChange}
      />
    ) : (
      <ActionBar.Action
        className={classes.searchInputWrapper}
        icon={<SearchIcon className={classes.searchIcon} />}
        disabled={disabled}
        onClick={() => this.setState({ isSearchMode: true, isSortMode: false })}
      />
    );

    return (
      <ActionBar className={classes.searchBox}>
        {multiSelectAction}
        {!isSearchMode && sortAction}
        {searchAction}
      </ActionBar>
    );
  }
}

export default withStyles(styles)(SearchBox);
