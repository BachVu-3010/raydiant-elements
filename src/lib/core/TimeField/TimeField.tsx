import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import { testAttr } from '../../helpers';
import FormHelperText from '../../internal/FormHelperText';
import Input from '../../internal/Input';
import InputBackground from '../../internal/InputBackground/index';
import InputLabel from '../../internal/InputLabel/index';

interface TimeFieldProps {
  testId?: string;
  label?: React.ReactNode;
  error?: boolean;
  value?: string;
  onChange?: (val: string) => any;
  onBlur?: React.FocusEventHandler<any>;
  disabled?: boolean;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
}

export const TimeField: React.SFC<TimeFieldProps> = ({
  testId,
  value = '',
  error = false,
  onChange = () => {
    return;
  },
  onBlur = () => {
    return;
  },
  label = '',
  disabled = false,
  fullWidth = true,
  helperText = '',
}) => (
  <FormControl fullWidth={fullWidth} error={error}>
    <InputBackground>
      <InputLabel error={error} disabled={disabled} shrink>
        {label}
      </InputLabel>
      <Input
        fullWidth
        type="time"
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        inputProps={{
          ...testAttr(testId),
        }}
        disabled={disabled}
      />
    </InputBackground>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default TimeField;
