import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const shadowHeight = 20;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: theme.zIndex.shadow,
      left: 0,
      right: 0,
      height: shadowHeight,
    },

    top: {
      top: -shadowHeight,
      opacity: 0.5,
      transform: 'translateY(-100%)',
      transition: 'transform 0.35s ease-in-out',
      boxShadow:
        '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    },

    bottom: {
      bottom: -shadowHeight,
      opacity: 0.5,
      transform: 'translateY(100%)',
      transition: 'transform 0.35s ease-in-out',
      boxShadow:
        '0px -3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px -1px 18px 0px rgba(0,0,0,0.12)',
    },

    slideIn: {
      transform: 'translateY(0%)',
    },
  });

export interface ScrollableShadowProps extends WithStyles<typeof styles> {
  scrollRef: React.RefObject<HTMLElement>;
  position: 'top' | 'bottom';
}

export const ScrollableShadow: React.FunctionComponent<
  ScrollableShadowProps
> = ({ scrollRef, position, classes }) => {
  const [canScroll, setCanScroll] = React.useState(false);
  const checkScroll = () => {
    if (!scrollRef.current) return;
    if (position === 'top') {
      setCanScroll(scrollRef.current.scrollTop > 0);
    } else if (position === 'bottom') {
      setCanScroll(
        scrollRef.current.scrollHeight >
          scrollRef.current.clientHeight + scrollRef.current.scrollTop,
      );
    }
  };

  React.useEffect(
    () => {
      if (!scrollRef.current) return;

      scrollRef.current.addEventListener('scroll', checkScroll, false);
      return () => {
        if (!scrollRef.current) return;
        scrollRef.current.removeEventListener('scroll', checkScroll, false);
      };
    },
    [scrollRef.current],
  );

  React.useEffect(checkScroll);

  return (
    <div
      className={cn(
        classes.root,
        classes[position],
        canScroll && classes.slideIn,
      )}
    />
  );
};

export default withStyles(styles)(ScrollableShadow);
