import MUIToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import * as React from 'react';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';
import ToggleButtonGroupButton from './ToggleButtonGroupButton';
import InputHelperText from '../InputHelperText';
import InputLabel from '../InputLabel';

interface ToggleButtonGroupProps extends WithStyles<typeof styles> {
  onChange: (value: string | string[]) => void;
  value: string | string[];
  label?: string;
  disabled?: boolean;
  helperText?: React.ReactNode;
  exclusive?: boolean;
}

export const ToggleButtonGroup: React.FunctionComponent<
  ToggleButtonGroupProps
> = ({
  children,
  value,
  onChange,
  label,
  disabled = false,
  helperText,
  classes,
  exclusive = false,
}) => (
  <div className={classes.root}>
    <InputLabel disabled={disabled}>{label}</InputLabel>
    <MUIToggleButtonGroup
      size="small"
      value={value}
      exclusive={exclusive}
      onChange={(_, updatedValue) => {
        if (onChange) {
          onChange(updatedValue);
        }
      }}
    >
      {children}
    </MUIToggleButtonGroup>
    {!!helperText && (
      <InputHelperText indent disabled={disabled}>
        {helperText}
      </InputHelperText>
    )}
  </div>
);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: theme.fontSizes.sm,
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(0.5),
    },
  });

export default Object.assign(withStyles(styles)(ToggleButtonGroup), {
  Button: ToggleButtonGroupButton,
});
