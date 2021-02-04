import * as cn from 'classnames';
import * as React from 'react';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export interface PaperModalHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const PaperModalHeader = ({
  className,
  children,
}: PaperModalHeaderProps) => {
  const classes = useStyles();
  return <div className={cn(classes.root, className)}>{children}</div>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 4),
      paddingTop: 0,
      borderBottom: `1px solid ${theme.divider.secondary}`,
    },
  }),
);

export default PaperModalHeader;
