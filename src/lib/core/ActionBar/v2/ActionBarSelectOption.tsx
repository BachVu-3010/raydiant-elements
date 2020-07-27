import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import ActionBarAction from './ActionBarAction';
import useStyles from './ActionBarSelectOption.styles';

export interface ActionBarSelectOptionProps {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

export const ActionBarSelectOption: React.SFC<ActionBarSelectOptionProps> = ({
  icon,
  label,
  selected,
  disabled,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <MenuItem
      disabled={disabled}
      onClick={onClick}
      selected={selected}
      classes={{
        root: classes.root,
        selected: classes.selected,
      }}
    >
      <ActionBarAction
        icon={icon}
        label={label}
        disabled={disabled}
        selected={selected}
      />
    </MenuItem>
  );
};

export default ActionBarSelectOption;
