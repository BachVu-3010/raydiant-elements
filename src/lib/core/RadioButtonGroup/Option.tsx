import cn from 'classnames';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { preventDefault } from '../../helpers';
import { Theme } from '../../theme';

export interface OptionProps extends WithStyles<typeof styles> {
  selected?: boolean;
  value: string;
  children: string;
  name?: string;
  onChange?: (value: string) => void;
}

export const Option: React.SFC<OptionProps> = ({
  value,
  onChange,
  children,
  classes,
  selected,
}) => (
  <button
    className={cn(classes.root, selected && classes.selected)}
    onClick={preventDefault(() => onChange(value))}
  >
    {children}
  </button>
);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontSize: theme.fontSizes.md,
      padding: theme.spacing.unit,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      minWidth: 40,
      height: 40,
      backgroundColor: theme.button.background,
      color: theme.button.foreground,
      cursor: 'pointer',
      '&:first-child': {
        borderTopLeftRadius: theme.borderRadius.sm,
        borderBottomLeftRadius: theme.borderRadius.sm,
      },
      '&:last-child': {
        borderTopRightRadius: theme.borderRadius.sm,
        borderBottomRightRadius: theme.borderRadius.sm,
      },
      '&:hover, &:focus': {
        boxShadow: 'inset 0 0 1px 1px #999',
        outline: '0',
      },
      border: `1px solid ${theme.button.border}`,
    },
    selected: {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.button.backgroundSelected,
    },
  });

export default withStyles(styles)(Option);
