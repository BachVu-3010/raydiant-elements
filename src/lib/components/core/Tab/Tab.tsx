import cn from 'classnames';
import * as React from 'react';
import { preventDefault } from '../../../helpers';
import Icon, { IconOptions } from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Tab.styles';
import TabContainer from './TabContainer';

export interface TabProps extends WithStyles<typeof styles> {
  /** The label of the tab */
  label: string;
  /** Set to true when the tab is selected */
  active: boolean;
  /** The icon of the tab */
  icon?: IconOptions;
  /** Set href to render an anchor  */
  href?: string;
  /** Set to true to disable growing  */
  shrink?: boolean;
  /** Called when the tab is clicked */
  onClick: () => any;
}

export const Tab: React.SFC<TabProps> = ({
  label,
  icon,
  href,
  active,
  shrink,
  onClick,
  classes,
}) => {
  const TabElement = href ? 'a' : 'button';
  return (
    <TabElement
      className={cn(
        classes.root,
        active && classes.active,
        shrink && classes.shrink,
      )}
      href={href}
      onClick={onClick && preventDefault(onClick)}
    >
      {icon && <Icon icon={icon} className={classes.icon} />}
      <span className={cn(classes.label, !icon && classes.labelNoIcon)}>
        {label}
      </span>
    </TabElement>
  );
};

export default Object.assign(withStyles(styles)(Tab), {
  Container: TabContainer,
});
