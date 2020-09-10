import cn from 'classnames';
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
      '&:not(:last-child)': {
        borderBottomColor: theme.palette.action.selected,
      },
    },
    cursorPointer: {
      cursor: 'pointer',
    },
    row: {
      alignItems: 'center',
    },
  });

export interface ItemProps extends WithStyles<typeof styles> {
  onClick?: () => void;
}

const Item: React.SFC<ItemProps> = ({ classes, children, onClick }) => (
  <div
    className={cn(classes.root, onClick && classes.cursorPointer)}
    onClick={onClick}
  >
    <Row className={classes.row}>{children}</Row>
  </div>
);

export default withStyles(styles)(Item);
