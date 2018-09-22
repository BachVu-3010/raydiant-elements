import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Breadcrumb.styles';
import BreadcrumbContainer from './BreadcrumbContainer';

export interface BreadcrumbProps extends WithStyles<typeof styles> {
  /** Text of the breadcrumb */
  label?: React.ReactNode;
  /** Set to true to prevent the component from shrinking  */
  noShrink?: boolean;
  /** Called when the user clicks the breadcrumb */
  onClick: () => any;
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
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

export default Object.assign(withStyles(styles)(Breadcrumb), {
  Container: BreadcrumbContainer,
});
