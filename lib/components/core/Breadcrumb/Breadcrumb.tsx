import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Breadcrumb.styles';
import BreadcrumbContainer from './BreadcrumbContainer';

export interface BreadcrumbProps extends WithStyles<typeof styles> {
  /** Text of the breadcrumb */
  label?: React.ReactNode;
  /** Called when the user clicks the breadcrumb */
  onClick: () => any;
  className?: string;
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  label,
  onClick,
  className,
  classes,
  children,
}) => (
  <button className={cn(classes.root, className)} onClick={onClick}>
    {label || children}
  </button>
);

export default Object.assign(withStyles(styles)(Breadcrumb), {
  Container: BreadcrumbContainer,
});
