import * as React from 'react';
import useVisibilitySensor from './useVisibilitySensor';

export interface ScrollableVisibilitySensorProps {
  children: (
    props: {
      visibilityRef: React.RefObject<HTMLDivElement>;
      isVisible: boolean;
    },
  ) => React.ReactNode;
}

export const ScrollableVisibilitySensor: React.FunctionComponent<
  ScrollableVisibilitySensorProps
> = ({ children }) => {
  const { visibilityRef, isVisible } = useVisibilitySensor();
  return <>{children({ visibilityRef, isVisible })}</>;
};

export default ScrollableVisibilitySensor;
