import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import Column from '../Column';

export interface CenterProps extends WithStyles<typeof styles> {
  doubleMargin?: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      flex: 1,
    },
  });

export const Center: React.SFC<CenterProps> = ({
  classes,
  children,
  doubleMargin,
}) => (
  <Column className={classes.root} doubleMargin={doubleMargin}>
    {children}
  </Column>
);

export default withStyles(styles)(Center);
