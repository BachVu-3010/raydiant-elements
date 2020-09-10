import * as cn from 'classnames';
import * as React from 'react';
import useStyles from './Heading.styles';

export interface HeadingProps {
  size?: 1 | 2 | 3 | 4 | 5;
  weight?: 300 | 400 | 500 | 600 | 700;
  className?: string;
  overline?: boolean;
  gutterBottom?: boolean;
  gutterTop?: boolean;
  center?: boolean;
  color?: 'default' | 'muted' | 'primary';
}

const defaultWeights = {
  1: 300,
  2: 300,
  3: 300,
  4: 300,
  5: 600,
};

const defaultColors = {
  1: 'primary',
  2: 'default',
  3: 'default',
  4: 'default',
  5: 'muted',
};

export const Heading: React.FunctionComponent<HeadingProps> = ({
  size = 1,
  weight = defaultWeights[size],
  color = defaultColors[size],
  overline,
  gutterBottom,
  gutterTop,
  center,
  className,
  children,
}) => {
  const classes = useStyles();
  return (
    <h5
      className={cn(
        classes.root,
        size === 1 && classes['size-1'],
        size === 2 && classes['size-2'],
        size === 3 && classes['size-3'],
        size === 4 && classes['size-4'],
        size === 5 && classes['size-5'],
        weight === 300 && classes['weight-300'],
        weight === 400 && classes['weight-400'],
        weight === 500 && classes['weight-500'],
        weight === 600 && classes['weight-600'],
        weight === 700 && classes['weight-700'],
        color === 'default' && classes.default,
        color === 'muted' && classes.muted,
        color === 'primary' && classes.primary,
        gutterBottom && classes.gutterBottom,
        gutterTop && classes.gutterTop,
        center && classes.center,
        overline && classes.overline,
        className,
      )}
    >
      {children}
    </h5>
  );
};

export default Heading;
