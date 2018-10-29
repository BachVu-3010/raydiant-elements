import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import Row from '../../layout/Row';
import styles from './ActionBar.styles';
import ActionBarTitle from './ActionBarTitle';

interface ActionBarProps extends WithStyles<typeof styles> {
  condensed: boolean;
  bottom: boolean;
}

export const ActionBar: React.SFC<ActionBarProps> = ({
  condensed,
  bottom,
  classes,
  children,
}) => (
  <Row
    className={cn(
      classes.root,
      condensed && classes.condensed,
      bottom && classes.bottom,
    )}
  >
    {children}
  </Row>
);

export default Object.assign(withThemeSelector(withStyles(styles)(ActionBar)), {
  Title: ActionBarTitle,
});
