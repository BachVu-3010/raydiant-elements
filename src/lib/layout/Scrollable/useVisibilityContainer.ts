import * as React from 'react';
import { doRectsIntersect, Rect } from '../../helpers';

type ListenerRefMap = WeakMap<
  React.RefObject<HTMLDivElement>,
  (isVisible: boolean) => void
>;

export interface VisibilityContainerOptions {
  buffer?: number;
}

const useVisibilityContainer = (opts: VisibilityContainerOptions = {}) => {
  const buffer = opts.buffer || 100;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const visibilityRefs = React.useRef<Array<React.RefObject<HTMLDivElement>>>(
    [],
  );
  const listenersMap = React.useRef<ListenerRefMap>(new WeakMap());
  const checkVisibilityRaf = React.useRef<number | null>(null);
  const updateListenersRaf = React.useRef<number | null>(null);

  const addRefToVisibilbityMap = (
    ref: React.RefObject<HTMLDivElement>,
    listener: (isVisible: boolean) => void,
  ) => {
    visibilityRefs.current.push(ref);
    listenersMap.current.set(ref, listener);

    if (checkVisibilityRaf.current) {
      cancelAnimationFrame(checkVisibilityRaf.current);
    }
    checkVisibilityRaf.current = requestAnimationFrame(checkVisibility);
  };

  const removeRefFromVisibilbityMap = (
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    const refIndex = visibilityRefs.current.indexOf(ref);
    if (refIndex === -1) return;

    visibilityRefs.current.splice(refIndex, 1);
    listenersMap.current.delete(ref);

    if (checkVisibilityRaf.current) {
      cancelAnimationFrame(checkVisibilityRaf.current);
    }
    checkVisibilityRaf.current = requestAnimationFrame(checkVisibility);
  };

  const checkVisibility = () => {
    if (!containerRef.current || visibilityRefs.current.length === 0) return;

    const containerRect: Rect = containerRef.current.getBoundingClientRect();
    const visibleRefs: Array<React.RefObject<HTMLDivElement>> = [];

    visibilityRefs.current.forEach(ref => {
      const visibilityRect: Rect = ref.current.getBoundingClientRect();
      const isVisible = doRectsIntersect(containerRect, {
        top: visibilityRect.top - buffer,
        left: visibilityRect.left - buffer,
        width: visibilityRect.width + buffer * 2,
        height: visibilityRect.height + buffer * 2,
      });

      if (isVisible) {
        visibleRefs.push(ref);
      }
    });

    // Defer firing listeners until next frame.
    if (updateListenersRaf.current) {
      cancelAnimationFrame(updateListenersRaf.current);
    }
    updateListenersRaf.current = requestAnimationFrame(() => {
      visibleRefs.forEach(ref => {
        const listener = listenersMap.current.get(ref);
        if (listener) listener(true);
      });

      updateListenersRaf.current = null;
    });
  };

  React.useEffect(() => {
    // Check visibility on scroll.
    containerRef.current.addEventListener('scroll', checkVisibility, false);
    // Check visibility on resize.
    window.addEventListener('resize', checkVisibility, false);
    // Check visibility on orientation change.
    window.addEventListener('orientation', checkVisibility, false);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          'scroll',
          checkVisibility,
          false,
        );
        window.removeEventListener('resize', checkVisibility, false);
        window.removeEventListener('orientation', checkVisibility, false);
      }
    };
  }, []);

  // Calculate visiblity on state change.
  const didMountRef = React.useRef(false);

  React.useEffect(() => {
    if (didMountRef.current) {
      checkVisibility();
    } else {
      didMountRef.current = true;
    }
  });

  return { containerRef, addRefToVisibilbityMap, removeRefFromVisibilbityMap };
};

export default useVisibilityContainer;
