import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import Row from '../../layout/Row';
import styles from './ActionBar.styles';
import ActionBarAction from './ActionBarAction';
import ActionBarInput from './ActionBarInput';
import ActionBarTitle from './ActionBarTitle';
import ActionBarSelect from './ActionBarSelect';
import ActionBarSelectOption from './ActionBarSelectOption';

interface ActionBarProps extends WithStyles<typeof styles> {
  condensed?: boolean;
  doubleMargin?: boolean;
  autoHeight?: boolean;
}

export const ActionBar: React.SFC<ActionBarProps> = ({
  condensed,
  doubleMargin,
  autoHeight,
  classes,
  children,
}) => (
  <Row
    className={cn(
      classes.root,
      condensed && classes.condensed,
      autoHeight && classes.autoHeight,
    )}
    doubleMargin={doubleMargin}
  >
    {children}
  </Row>
);

export default Object.assign(withThemeSelector(withStyles(styles)(ActionBar)), {
  Title: ActionBarTitle,
  Action: ActionBarAction,
  Input: ActionBarInput,
  Select: ActionBarSelect,
  SelectOption: ActionBarSelectOption,
});
