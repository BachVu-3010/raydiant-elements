import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './BreadcrumbCrumb.styles';

export interface BreadcrumbCrumbProps extends WithStyles<typeof styles> {
  /** Text of the breadcrumb */
  label?: React.ReactNode;
  /** Set to true to prevent the component from shrinking */
  noShrink?: boolean;
  /** Called when the user clicks the breadcrumb */
  onClick: () => any;
}

export const BreadcrumbCrumb: React.SFC<BreadcrumbCrumbProps> = ({
  label,
  noShrink = false,
  onClick,
  classes,
  children,
}) => (
  <button
    className={cn(classes.root, noShrink && classes.noShrink)}
    onClick={onClick}
  >
    {label || children}
  </button>
);

export default withStyles(styles)(BreadcrumbCrumb);
