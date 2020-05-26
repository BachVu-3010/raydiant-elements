import * as React from 'react';
import * as cn from 'classnames';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';
import ScrollableContext from './ScrollableContext';
import ScrollableVisibilitySensor from './ScrollableVisibilitySensor';
import ScrollableShadow from './ScrollableShadow';
import useVisibilityContainer from './useVisibilityContainer';

const styles = (_: Theme) =>
  createStyles({
    root: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },

    scroll: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      ...scrollable(),
    },
  });

type RenderFunction = ((
  ref: React.RefObject<HTMLDivElement>,
) => React.ReactNode);

export interface ScrollableProps extends WithStyles<typeof styles> {
  className?: string;
  buffer?: number;
  children?: React.ReactNode | RenderFunction;
}

export const Scrollable: React.FunctionComponent<ScrollableProps> = ({
  className,
  buffer,
  children,
  classes,
}) => {
  const {
    containerRef,
    addRefToVisibilbityMap,
    removeRefFromVisibilbityMap,
  } = useVisibilityContainer({ buffer });

  return (
    <ScrollableContext.Provider
      value={{
        scrollRef: containerRef,
        addRefToVisibilbityMap,
        removeRefFromVisibilbityMap,
      }}
    >
      <div className={cn(classes.root, className)}>
        <ScrollableShadow scrollRef={containerRef} position="top" />
        <div ref={containerRef} className={classes.scroll}>
          {typeof children === 'function'
            ? (children as RenderFunction)(containerRef)
            : children}
        </div>
        <ScrollableShadow scrollRef={containerRef} position="bottom" />
      </div>
    </ScrollableContext.Provider>
  );
};

export default Object.assign(withStyles(styles)(Scrollable), {
  VisibilitySensor: ScrollableVisibilitySensor,
});
