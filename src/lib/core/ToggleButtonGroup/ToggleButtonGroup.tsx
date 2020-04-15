import MUIToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import * as React from 'react';
import FormHelperText from '../../internal/FormHelperText';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';
import ToggleButtonGroupButton from './ToggleButtonGroupButton';

interface ToggleButtonGroupProps extends WithStyles<typeof styles> {
  onChange: (value: string | string[]) => void;
  value: string | string[];
  label?: string;
  helperText?: React.ReactNode;
  onBlur?: React.FocusEventHandler<any>;
  exclusive?: boolean;
}

export const ToggleButtonGroup: React.FunctionComponent<
  ToggleButtonGroupProps
> = ({
  children,
  value,
  onChange,
  label,
  helperText,
  onBlur,
  classes,
  exclusive = false,
}) => (
  <div className={classes.root}>
    {label && <span className={classes.label}>{label}</span>}
    <MUIToggleButtonGroup
      size="small"
      value={value}
      exclusive={exclusive}
      onBlur={onBlur}
      onChange={(_, updatedValue) => {
        if (onChange) {
          onChange(updatedValue);
        }
      }}
    >
      {children}
    </MUIToggleButtonGroup>
    {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
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
