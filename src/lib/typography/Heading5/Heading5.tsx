import * as cn from 'classnames';
import * as React from 'react';
import useStyles from './Heading5.styles';

export interface Heading5Props {
  className?: string;
  overline?: boolean;
}

export const Heading5: React.FunctionComponent<Heading5Props> = ({
  className,
  overline,
  children,
}) => {
  const classes = useStyles();
  return (
    <h5 className={cn(classes.root, overline && classes.overline, className)}>
      {children}
    </h5>
  );
};

export default Heading5;
