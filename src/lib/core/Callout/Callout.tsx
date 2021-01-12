import * as React from 'react';
import AlertIcon from '../AlertIcon';
import { Theme } from '../../theme';
import { makeStyles, createStyles } from '../../styles';

interface CalloutProps {
  children: React.ReactNode;
}

const Callout = ({ children }: CalloutProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AlertIcon color="default" className={classes.icon} />
      {children}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      display: 'flex',
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.text.primary,
    },

    icon: {
      marginTop: 2,
      marginRight: theme.spacing(1),
    },
  }),
);

export default Callout;
