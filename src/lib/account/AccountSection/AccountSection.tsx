import * as cn from 'classnames';
import * as React from 'react';
import Heading2 from '../../core/Heading2';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './AccountSection.styles';

interface AccountSectionProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  title: React.ReactNode;
}

export const AccountSection: React.SFC<AccountSectionProps> = ({
  children,
  title,
  classes,
}) => (
  <div className={cn(classes.accountSection)}>
    <div className={cn(classes.accountSectionTitle)}>
      <Heading2>{title}</Heading2>
    </div>
    {children}
  </div>
);

export default withStyles(styles)(AccountSection);
