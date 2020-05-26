import * as React from 'react';

interface ScrollableContext {
  scrollRef: React.RefObject<HTMLDivElement>;
  addRefToVisibilbityMap: (
    ref: React.RefObject<HTMLElement>,
    listener: (isVisible: boolean) => void,
  ) => void;
  removeRefFromVisibilbityMap: (ref: React.RefObject<HTMLElement>) => void;
}

export default React.createContext<ScrollableContext>({
  scrollRef: null,
  addRefToVisibilbityMap: () => {
    return;
  },
  removeRefFromVisibilbityMap: () => {
    return;
  },
});
