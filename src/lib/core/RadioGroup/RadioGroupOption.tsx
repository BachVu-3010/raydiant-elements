import MUIFormControlLabel from '@material-ui/core/FormControlLabel';
import * as React from 'react';
// import { testAttr } from '../../helpers';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';
import RadioGroupRadio from './RadioGroupRadio';

export interface OptionProps extends WithStyles<typeof styles> {
  value: string;
  label: string;
  checked?: boolean;
  inputRef?: React.Ref<any>;
  onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
  testId?: string;
}

export const Option: React.SFC<OptionProps> = ({
  value,
  label,
  checked,
  inputRef,
  onChange,
  classes,
  testId,
}) => (
  <MUIFormControlLabel
    value={value}
    label={label}
    checked={checked}
    inputRef={inputRef}
    control={<RadioGroupRadio testId={testId} />}
    onChange={onChange}
    classes={{
      label: classes.label,
    }}
  />
);

const styles = (theme: Theme) =>
  createStyles({
    label: {
      fontSize: theme.fontSizes.md,
    },
  });

export default withStyles(styles)(Option);
