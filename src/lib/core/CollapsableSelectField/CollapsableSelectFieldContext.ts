import * as React from 'react';

export interface CollapsableSelectFieldContext {
  isSelected: (optionValue: string) => boolean;
  setSelected: (optionValue: string, selected: boolean) => void;
  isDisabled: () => boolean;
}

export default React.createContext<CollapsableSelectFieldContext>({
  isSelected: () => false,
  isDisabled: () => false,
  setSelected: () => {
    //
  },
});
