import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import ActionBarAction from './ActionBarAction';
import styles from './ActionBarSelectOption.styles';

export interface ActionBarSelectOptionProps extends WithStyles<typeof styles> {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

export const ActionBarSelectOption: React.SFC<ActionBarSelectOptionProps> = ({
  classes,
  icon,
  label,
  selected,
  disabled,
  onClick,
}) => {
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

export default withStyles(styles)(ActionBarSelectOption);
