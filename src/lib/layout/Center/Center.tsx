import * as React from 'react';
import * as cn from 'classnames';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import Column from '../Column';

export interface CenterProps extends WithStyles<typeof styles> {
  className?: string;
  doubleMargin?: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      flex: 1,
    },
  });

export const Center: React.SFC<CenterProps> = ({
  className,
  classes,
  children,
  doubleMargin,
}) => (
  <Column className={cn(classes.root, className)} doubleMargin={doubleMargin}>
    {children}
  </Column>
);

export default withStyles(styles)(Center);
