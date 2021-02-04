import * as cn from 'classnames';
import * as React from 'react';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export interface PaperModalBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const PaperModalBody = ({
  className,
  children,
}: PaperModalBodyProps) => {
  const classes = useStyles();
  return <div className={cn(classes.root, className)}>{children}</div>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 4),

      '&:first-child': {
        paddingTop: theme.spacing(4),
      },

      '&:last-child': {
        paddingBottom: theme.spacing(4),
      },

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1, 2),
      },
    },
  }),
);

export default PaperModalBody;
