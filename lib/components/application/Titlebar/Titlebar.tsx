import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Spacer from '../../internal/Spacer';
import styles from './Titlebar.styles';
import TitlebarTitle from './TitlebarTitle';

interface TitlebarProps extends WithStyles<typeof styles> {}

export const Titlebar: React.SFC<TitlebarProps> = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

export default Object.assign(withStyles(styles)(Titlebar), {
  Title: TitlebarTitle,
  Spacer,
});
