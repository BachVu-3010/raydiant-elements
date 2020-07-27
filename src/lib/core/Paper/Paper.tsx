import MUIPaper, { PaperProps as MUIPaperProps } from '@material-ui/core/Paper';
import * as cn from 'classnames';
import * as React from 'react';
import withThemeSelector from '../withThemeSelector';
import useStyles from './Paper.styles';

export interface PaperProps extends MUIPaperProps {
  className?: string;
}

export const Paper: React.SFC<PaperProps> = ({
  elevation = 0,
  className,
  children,
  ...paperProps
}) => {
  const classes = useStyles();

  return (
    <MUIPaper
      className={cn(classes.root, className)}
      elevation={elevation}
      {...paperProps}
    >
      {children}
    </MUIPaper>
  );
};

export default withThemeSelector(Paper);
