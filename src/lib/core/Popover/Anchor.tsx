import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../withStyles';

export interface AnchorProps extends WithStyles<typeof styles> {
  fullWidth?: boolean;
}

const styles = () =>
  createStyles({
    root: { position: 'relative', display: 'inline-block' },
    fullWidth: {
      display: 'block',
    },
  });

const Anchor: React.SFC<AnchorProps> = ({ children, classes, fullWidth }) => (
  <span className={cn(classes.root, fullWidth && classes.fullWidth)}>
    {children}
  </span>
);

export default withStyles(styles)(Anchor);
