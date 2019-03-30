import * as React from 'react';

export interface ScrollContextProps {
  scrollTop: number;
  scrollLeft: number;
  offsetHeight: number;
  offsetWidth: number;
}

export type ScrollConsumerProps = Partial<ScrollContextProps>;

const ScrollContext = React.createContext<ScrollContextProps>({
  scrollTop: 0,
  scrollLeft: 0,
  offsetHeight: 0,
  offsetWidth: 0,
});

export default ScrollContext;
