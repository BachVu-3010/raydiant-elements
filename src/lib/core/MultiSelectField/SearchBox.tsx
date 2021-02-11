import * as React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SwapVertReverseIcon from '../../icons/SwapVertReverse';
import withStyles, { WithStyles } from '../withStyles';
import styles from './SearchBox.styles';
import Checkbox from '../Checkbox';
import ActionBar from '../ActionBar/v2';
import { MultiSelectFieldChild } from './MultiSelectField';
import { isElementSelected } from '../../helpers';

export enum SortType {
  Default,
  Name,
}
export interface SortMode {
  type: SortType;
  isReverseSort: boolean;
}
export const DEFAULT_SORT_MODE: SortMode = {
  type: SortType.Default,
  isReverseSort: false,
};

interface SearchBoxProps extends WithStyles<typeof styles> {
  value: string[];
  options: MultiSelectFieldChild[];
  searchTerm?: string;
  disabled?: boolean;
  onChange: (value: string[]) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (newSortMode: SortMode) => void;
}

interface SearchBoxState {
  isSearchMode: boolean;
  isSortMode: boolean;
  sortMode: SortMode;
}

export class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
  static defaultProps: Partial<SearchBoxProps> = {
    value: [],
    options: [],
    searchTerm: '',
    disabled: false,
  };

  state: SearchBoxState = {
    isSearchMode: false,
    isSortMode: false,
    sortMode: DEFAULT_SORT_MODE,
  };

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

    const isDefaultSortMode = sortMode.type === SortType.Default;
    const isDefaultSortModeRevert = isDefaultSortMode && sortMode.isReverseSort;
    const isNameSortMode = sortMode.type === SortType.Name;
    const isNameSortModeRevert = isNameSortMode && sortMode.isReverseSort;
    const sortActionOptions = (
      <>
        <ActionBar.SelectOption
          label="Default"
          icon={
            isDefaultSortModeRevert ? <SwapVertReverseIcon /> : <SwapVertIcon />
          }
          selected={isDefaultSortMode}
          onClick={() => {
            const newSortMode = {
              type: SortType.Default,
              isReverseSort: isDefaultSortMode
                ? !sortMode.isReverseSort
                : false,
            };
            this.setState({ isSortMode: !isSortMode, sortMode: newSortMode });
            onSortChange(newSortMode);
          }}
        />
        <ActionBar.SelectOption
          icon={
            isNameSortModeRevert ? <SwapVertReverseIcon /> : <SwapVertIcon />
          }
          label="Name"
          selected={isNameSortMode}
          onClick={() => {
            const newSortMode = {
              type: SortType.Name,
              isReverseSort: isNameSortMode ? !sortMode.isReverseSort : false,
            };
            this.setState({ isSortMode: !isSortMode, sortMode: newSortMode });
            onSortChange(newSortMode);
          }}
        />
      </>
    );
    const sortAction = (
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
        {sortActionOptions}
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
