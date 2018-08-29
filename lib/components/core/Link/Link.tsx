import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { preventDefault } from '../../helpers';
import styles from './Link.styles';

interface LinkProps extends WithStyles<typeof styles> {
  href: string;
  target?: string;
  onClick?: () => any;
}

export const Link: React.SFC<LinkProps> = ({
  href = 'javascript:;',
  target,
  onClick,
  children,
  classes,
}) => (
  <a
    className={classes.root}
    href={href}
    target={target}
    onClick={onClick && preventDefault(onClick)}
  >
    {children}
  </a>
);

export default withStyles(styles)(Link);
