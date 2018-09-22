import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import Row from '../../layout/Row';
import styles from './Titlebar.styles';
import TitlebarTitle from './TitlebarTitle';

interface TitlebarProps extends WithStyles<typeof styles> {}

export const Titlebar: React.SFC<TitlebarProps> = ({ classes, children }) => (
  <Row className={classes.root}>{children}</Row>
);

export default Object.assign(withThemeSelector(withStyles(styles)(Titlebar)), {
  Title: TitlebarTitle,
});
