import * as React from 'react';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';
import InputHelperText from '../InputHelperText';
import InputLabel from '../InputLabel';
import Input from '../Input';

interface NumberFieldProps {
  /** The label of the text field */
  label: string;
  /** The label of the text field */
  value?: number;
  /** The minimum value allowed */
  min?: number;
  /** The maximum value allowed */
  max?: number;
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Called when the value changes */
  onChange?: (value: number) => any;
  /** Called when the input loses focus */
  onBlur?: React.FocusEventHandler<any>;
}

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

export const NumberField: React.SFC<NumberFieldProps> = ({
  label,
  value = null,
  min = null,
  max = null,
  error = false,
  disabled = false,
  helperText = '',
  onChange = () => {
    return;
  },
  onBlur = () => {
    return;
  },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputLabel error={error} disabled={disabled}>
        {label}
      </InputLabel>

      <Input
        type="number"
        value={value !== null ? String(value) : ''}
        onBlur={onBlur}
        onChange={v => onChange(parseInt(v, 10))}
        disabled={disabled}
        error={error}
        min={min}
        max={max}
      />

      {helperText && (
        <InputHelperText indent error={error} disabled={disabled}>
          {helperText}
        </InputHelperText>
      )}
    </div>
  );
};

export default NumberField;
