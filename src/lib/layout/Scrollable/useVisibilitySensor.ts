import * as React from 'react';
import ScrollableContext from './ScrollableContext';

const useVisibilitySensor = () => {
  const visibilityRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const {
    addRefToVisibilbityMap,
    removeRefFromVisibilbityMap,
  } = React.useContext(ScrollableContext);

  React.useEffect(() => {
    addRefToVisibilbityMap(visibilityRef, updatedIsVisible => {
      if (updatedIsVisible !== isVisible) {
        setIsVisible(updatedIsVisible);
      }
    });
    return () => removeRefFromVisibilbityMap(visibilityRef);
  }, []);

  return { visibilityRef, isVisible };
};

export default useVisibilitySensor;
