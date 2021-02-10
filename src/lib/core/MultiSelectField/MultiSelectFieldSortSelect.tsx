import * as React from 'react';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SwapVertReverseIcon from '../../icons/SwapVertReverse';
import ActionBar from '../ActionBar/v2';
import {
  MultiSelectFieldSortMode,
  MultiSelectFieldSortOption,
} from './MultiSelectField';

interface MultiSelectFieldSortSelectProps {
  sortMode: MultiSelectFieldSortMode;
  sortOption: MultiSelectFieldSortOption;
  onSelect: (newSortMode: MultiSelectFieldSortMode) => void;
}

const MultiSelectFieldSortSelect: React.SFC<MultiSelectFieldSortSelectProps> = ({
  sortMode,
  sortOption,
  onSelect,
}) => {
  const selected = sortMode && sortMode.by === sortOption.by && sortMode.label === sortOption.label;
  const isReverted = selected ? sortMode.isReverseSort : sortOption.defaultDirection === 'desc';
  const sortLabel =  sortOption && sortOption.label;

  if (!sortLabel) {
    return null;
  }

  return (
    <ActionBar.SelectOption
      label={sortLabel}
      icon={isReverted ? <SwapVertReverseIcon /> : <SwapVertIcon />}
      selected={selected}
      onClick={() => {
        onSelect({
          label: sortOption.label,
          by: sortOption.by,
          type: sortOption.type,
          isReverseSort: selected ? !sortMode.isReverseSort : sortOption.defaultDirection === 'desc',
        });
      }}
    />
  )
}

export default MultiSelectFieldSortSelect;
