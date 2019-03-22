import * as cn from 'classnames';
import * as React from 'react';
import withThemeSelector from '../../core/withThemeSelector';
import withStyles, { WithStyles } from '../withStyles';
import TabContent from './TabContent';
import TabItem from './TabItem';
import styles from './Tabs.styles';

export interface TabsContainerProps extends WithStyles<typeof styles> {
  inline?: boolean;
}

export const Tabs: React.SFC<TabsContainerProps> = ({
  children,
  classes,
  inline,
}) => (
  <div className={cn(classes.root, inline && classes.inline)}>{children}</div>
);

export default Object.assign(withThemeSelector(withStyles(styles)(Tabs)), {
  Item: TabItem,
  Content: TabContent,
});
