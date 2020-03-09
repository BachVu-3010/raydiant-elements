import * as React from 'react';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      background: theme.popover.headerBackground,
      padding: theme.spacing(2),
      borderBottom: `1px solid ${theme.popover.borderColor}`,
      minHeight: 56,
      display: 'flex',
      alignItems: 'center',
    },
  });

export interface TitleProps extends WithStyles<typeof styles> {}

const Header: React.SFC<TitleProps> = props => {
  const { children, classes } = props;
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Header);
