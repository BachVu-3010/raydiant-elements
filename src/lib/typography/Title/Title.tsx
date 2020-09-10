import * as cn from 'classnames';
import * as React from 'react';
import useStyles from './Title.styles';

export interface TitleProps {
  className?: string;
}

export const Title: React.FunctionComponent<TitleProps> = ({
  className,
  children,
}) => {
  const classes = useStyles();
  return <h1 className={cn(classes.root, className)}>{children}</h1>;
};

export default Title;
