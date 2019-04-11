import * as React from 'react';
import Column from '../../layout/Column/index';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';

export interface SectionProps extends WithStyles<typeof styles> {}
const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      padding: theme.spacing.unit * 2,
    },
  });

export const Section: React.SFC<SectionProps> = ({ children, classes }) => (
  <Column className={classes.root}>{children}</Column>
);

export default withStyles(styles)(Section);
