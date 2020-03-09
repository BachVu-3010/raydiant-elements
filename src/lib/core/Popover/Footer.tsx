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
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
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
