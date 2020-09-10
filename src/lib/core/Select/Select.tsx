import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MUISelect from '@material-ui/core/Select';
import * as React from 'react';
import { testAttr } from '../../helpers';
import useStyles from './Select.styles';

interface SelectProps {
  value?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  /** The <option>s of the select */
  children: React.ReactNode;
  onChange?: (value: string) => void;
  onBlur?: React.FocusEventHandler<any>;
  onFocus?: React.FocusEventHandler<any>;
  testId?: string;
  native?: boolean;
}

const Select: React.SFC<SelectProps> = ({
  value,
  disabled = false,
  fullWidth = false,
  children,
  onChange,
  onBlur,
  onFocus,
  testId,
  native = true,
}) => {
  const classes = useStyles();

  return (
    <MUISelect
      className={classes.root}
      native={native}
      value={value}
      disabled={disabled}
      fullWidth={fullWidth}
      IconComponent={ExpandMoreIcon}
      onChange={e => onChange(e.target.value as string)}
      onBlur={onBlur}
      onFocus={onFocus}
      classes={{
        select: classes.select,
        icon: classes.icon,
      }}
      inputProps={{ ...testAttr(testId) }}
    >
      {children}
    </MUISelect>
  );
};

export default Select;
