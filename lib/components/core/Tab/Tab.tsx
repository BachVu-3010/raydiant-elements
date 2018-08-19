import cn from 'classnames';
import * as React from 'react';
import Icon, { IconOptions } from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Tab.styles';
import TabContainer from './TabContainer';

export interface TabProps extends WithStyles<typeof styles> {
  /** The label of the tab */
  label: string;
  /** The icon of the tab */
  icon: IconOptions;
  /** Set to true when the tab is selected */
  active: boolean;
  /** Set href to render an anchor  */
  href: string;
  /** Called when the tab is clicked */
  onClick: () => any;
}

export const Tab: React.SFC<TabProps> = ({
  label,
  icon,
  href,
  active,
  onClick,
  classes,
}) => {
  const TabElement = href ? 'a' : 'button';
  return (
    <TabElement
      className={cn(classes.root, active && classes.active)}
      href={href}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} className={classes.icon} />}
      {label}
    </TabElement>
  );
};

export default Object.assign(withStyles(styles)(Tab), {
  Container: TabContainer,
});
