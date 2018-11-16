import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Breadcrumb.styles';
import BreadcrumbCrumb from './BreadcrumbCrumb';

export interface BreadcrumbProps extends WithStyles<typeof styles> {
  /** Called when the user clicks the back button */
  onBack: () => any;
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
  onBack,
  children,
  classes,
}) => {
  const numberOfChildren = React.Children.count(children);
  if (numberOfChildren <= 1) {
    return <div className={classes.root}>{children}</div>;
  }

  const crumbs: React.ReactChild[] = [
    <BreadcrumbCrumb key="back" onClick={onBack} noShrink>
      <Icon icon="arrowLeft" className={classes.backIcon} />
    </BreadcrumbCrumb>,
  ];

  React.Children.forEach(children, (child, index) => {
    crumbs.push(child);
    if (index !== numberOfChildren - 1) {
      crumbs.push(
        <span key={`sep-${index}`} className={classes.separator}>
          /
        </span>,
      );
    }
  });

  return <div className={classes.root}>{crumbs}</div>;
};

export default Object.assign(withStyles(styles)(Breadcrumb), {
  Crumb: BreadcrumbCrumb,
});
