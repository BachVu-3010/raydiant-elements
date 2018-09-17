import * as React from 'react';
import { preventDefault, testAttr } from '../../../helpers';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Link.styles';

interface LinkProps extends WithStyles<typeof styles> {
  /** The href of the link */
  href: string;
  /** The target of the link */
  target?: string;
  /** Called when the link is clicked. */
  onClick?: () => any;
  /** The test id of the link */
  testId?: string;
}

export const Link: React.SFC<LinkProps> = ({
  href = 'javascript:;',
  target,
  onClick,
  children,
  classes,
  testId,
}) => (
  <a
    className={classes.root}
    href={href}
    target={target}
    onClick={onClick && preventDefault(onClick)}
    {...testAttr(testId)}
  >
    {children}
  </a>
);

export default withStyles(styles)(Link);
