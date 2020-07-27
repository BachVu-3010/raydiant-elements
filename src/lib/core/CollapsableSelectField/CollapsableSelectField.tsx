import * as cn from 'classnames';
import * as React from 'react';
import CollapsableSelectFieldOption from './CollapsableSelectFieldOption';
import useStyles from './CollapsableSelectField.styles';
import CollapsableSelectFieldContext from './CollapsableSelectFieldContext';

type OnChangeCallback = (value: string) => void;

export interface CollapsableSelectFieldProps {
  className?: string;
  value: string;
  onChange: OnChangeCallback;
  disabled?: boolean;
}

type OnChangeMultipleCallback = (value: string[]) => void;

export interface CollapsableSelectFieldMultipleProps {
  className?: string;
  value: string[];
  onChange: OnChangeMultipleCallback;
  disabled?: boolean;
}

export const CollapsableSelectField: React.SFC<
  CollapsableSelectFieldProps | CollapsableSelectFieldMultipleProps
> = ({ className, value, disabled, onChange, children }) => {
  const classes = useStyles();

  const isSelected = React.useCallback(
    (optionValue: string) => {
      return Array.isArray(value)
        ? value.includes(optionValue)
        : value === optionValue;
    },
    [value],
  );

  const isDisabled = React.useCallback(
    () => {
      return disabled;
    },
    [disabled],
  );

  const setSelected = React.useCallback(
    (optionValue: string, selected: boolean) => {
      if (Array.isArray(value)) {
        if (selected) {
          (onChange as OnChangeMultipleCallback)([...value, optionValue]);
        } else {
          (onChange as OnChangeMultipleCallback)(
            value.filter(v => v !== optionValue),
          );
        }
      } else {
        (onChange as OnChangeCallback)(optionValue);
      }
    },
    [value, onChange],
  );

  return (
    <CollapsableSelectFieldContext.Provider
      value={{ isSelected, isDisabled, setSelected }}
    >
      <div className={cn(classes.root, className)}>{children}</div>
    </CollapsableSelectFieldContext.Provider>
  );
};

export default Object.assign(CollapsableSelectField, {
  Option: CollapsableSelectFieldOption,
});
