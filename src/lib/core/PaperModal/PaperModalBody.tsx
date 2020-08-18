import * as cn from 'classnames';
import * as React from 'react';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export interface PaperModalBodyProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 4),

      '&:last-child': {
        paddingBottom: theme.spacing(4),
      },

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
      },
    },
  }),
);

export const PaperModalBody: React.SFC<PaperModalBodyProps> = ({
  className,
  children,
}) => {
  const classes = useStyles();
  return <div className={cn(classes.root, className)}>{children}</div>;
};

export default PaperModalBody;
