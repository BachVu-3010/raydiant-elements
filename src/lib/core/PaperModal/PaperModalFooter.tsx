import * as cn from 'classnames';
import * as React from 'react';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';
import { marginBetweenChildrenHorizontal } from '../../mixins';

export interface PaperModalFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const PaperModalFooter = ({
  className,
  children,
}: PaperModalFooterProps) => {
  const classes = useStyles();
  return <div className={cn(classes.root, className)}>{children}</div>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...marginBetweenChildrenHorizontal(16),
      position: 'relative',
      display: 'flex',
      padding: theme.spacing(4, 0),
      margin: theme.spacing(0, 4),
      borderTop: `1px solid ${theme.divider.primary}`,

      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0, 2),
      },
    },
  }),
);

export default PaperModalFooter;
