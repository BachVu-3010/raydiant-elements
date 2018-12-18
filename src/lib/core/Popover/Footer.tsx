import * as React from 'react';
import Row from '../../layout/Row';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontWeight: 500,
      backgroundColor: theme.popover.contentBackground,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      borderBottom: '1px solid transparent',
      borderTop: `1px solid ${theme.popover.borderColor}`,
      minHeight: 68,
    },
    row: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export interface FooterProps extends WithStyles<typeof styles> {}

const Footer: React.SFC<FooterProps> = ({ classes, children }) => (
  <div className={classes.root}>
    <Row className={classes.row}>{children}</Row>
  </div>
);

export default withStyles(styles)(Footer);
