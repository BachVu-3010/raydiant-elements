import * as React from 'react';

interface OneThirdLayoutContext {
  collapseMode: 'collapseLargeColumn' | 'collapseSmallColumn';
}

export default React.createContext<OneThirdLayoutContext>({
  collapseMode: 'collapseLargeColumn',
});
