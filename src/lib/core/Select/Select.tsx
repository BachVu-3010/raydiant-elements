import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MUISelect from '@material-ui/core/Select';
import * as cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import useStyles from './Select.styles';

interface SelectProps {
  className?: string;
  classes?: React.ComponentProps<typeof MUISelect>['classes'];
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
  className,
  classes: classOverrides = {},
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
      className={cn(classes.root, className)}
      native={native}
      value={value}
      disabled={disabled}
      fullWidth={fullWidth}
      IconComponent={ExpandMoreIcon}
      onChange={e => onChange(e.target.value as string)}
      onBlur={onBlur}
      onFocus={onFocus}
      classes={{
        ...classOverrides,
        select: cn(classes.select, classOverrides.select),
        icon: cn(
          classes.icon,
          disabled && classes.iconDisabled && classOverrides.icon,
        ),
      }}
      inputProps={{ ...testAttr(testId) }}
    >
      {children}
    </MUISelect>
  );
};

export default Select;
