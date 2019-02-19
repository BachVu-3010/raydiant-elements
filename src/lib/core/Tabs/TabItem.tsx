import * as cn from 'classnames';
import * as React from 'react';
import { preventDefault, testAttr } from '../../helpers';
import Icon, { IconOptions } from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './TabItem.styles';

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
  onClick?: () => any;
  testId?: string;
}

export const Tab: React.SFC<TabProps> = ({
  label,
  icon,
  href,
  active,
  shrink,
  onClick,
  testId,
  classes,
}) => {
  const TabElement = (href ? 'a' : 'button') as React.ReactType;

  return (
    <TabElement
      className={cn(
        classes.root,
        active && classes.active,
        shrink && classes.shrink,
      )}
      href={href}
      onClick={onClick && preventDefault(onClick)}
      {...testAttr(testId)}
    >
      {icon && <Icon icon={icon} className={classes.icon} />}
      <span className={cn(classes.label, !icon && classes.labelNoIcon)}>
        {label}
      </span>
    </TabElement>
  );
};

export default withStyles(styles)(Tab);
