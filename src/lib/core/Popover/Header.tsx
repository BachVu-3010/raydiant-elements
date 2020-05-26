import * as React from 'react';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
      minHeight: 56,
      display: 'flex',
      alignItems: 'center',
      borderBottom: `1px solid ${theme.palette.action.selected}`,
    },
  });

export interface TitleProps extends WithStyles<typeof styles> {}

const Header: React.SFC<TitleProps> = props => {
  const { children, classes } = props;
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Header);
