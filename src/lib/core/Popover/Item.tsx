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
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      borderBottom: '1px solid transparent',
      '&:not(:last-child)': {
        borderBottomColor: theme.popover.borderColor,
      },
      minHeight: 68,
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

const Item: React.SFC<ItemProps> = props => {
  const { classes, children, onClick } = props;
  return (
    <div
      className={cn(classes.root, onClick && classes.cursorPointer)}
      onClick={onClick}
    >
      <Row className={classes.row}>{children}</Row>
    </div>
  );
};

export default withStyles(styles)(Item);
