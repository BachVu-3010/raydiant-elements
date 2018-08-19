import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import Breadcrumb from './Breadcrumb';
import styles from './BreadcrumbContainer.styles';

export interface BreadcrumbContainerProps extends WithStyles<typeof styles> {
  /** Called when the user clicks the back button */
  onBack: () => any;
}

const BreadcrumbContainer: React.SFC<BreadcrumbContainerProps> = ({
  onBack,
  children,
  classes,
}) => {
  const numberOfChildren = React.Children.count(children);
  if (numberOfChildren <= 1) {
    return <div className={classes.root}>{children}</div>;
  }

  const crumbs: React.ReactChild[] = [
    <Breadcrumb key="back" onClick={onBack} className={classes.back}>
      <Icon icon="arrowLeft" className={classes.backIcon} />
    </Breadcrumb>,
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

export default withStyles(styles)(BreadcrumbContainer);
