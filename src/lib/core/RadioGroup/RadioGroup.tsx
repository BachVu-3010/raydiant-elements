import MUIFormControl from '@material-ui/core/FormControl';
import MUIFormLabel from '@material-ui/core/FormLabel';
import MUIRadioGroup from '@material-ui/core/RadioGroup';
import cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';
import Option from './RadioGroupOption';

interface RadioGroupProps extends WithStyles<typeof styles> {
  value?: string;
  label?: string;
  inline?: boolean;
  onChange?: (value: string) => void;
  testId?: string;
}

export const RadioGroup: React.SFC<RadioGroupProps> = ({
  label = '',
  value,
  inline,
  onChange,
  children,
  classes,
  testId,
}) => (
  <MUIFormControl component="fieldset">
    {label && (
      <MUIFormLabel component="legend" classes={{ root: classes.label }}>
        {label}
      </MUIFormLabel>
    )}
    <MUIRadioGroup
      value={value}
      onChange={(_, updatedValue) => {
        if (onChange) {
          onChange(updatedValue);
        }
      }}
      classes={{ root: cn(classes.group, inline && classes.inline) }}
      {...testAttr(testId)}
    >
      {children}
    </MUIRadioGroup>
  </MUIFormControl>
);

const styles = (theme: Theme) =>
  createStyles({
    label: {
      fontSize: theme.fontSizes.sm,
      color: theme.palette.text.secondary,
    },
    inline: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    group: {
      paddingTop: theme.spacing.unit / 2,
      paddingBottom: theme.spacing.unit / 2,
    },
  });

export default Object.assign(withStyles(styles)(RadioGroup), {
  Option,
});
