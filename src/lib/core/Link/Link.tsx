import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { preventDefault, testAttr } from '../../helpers';
import styles from './Link.styles';

type RenderFn = (
  props: { className: string; activeClassName: string },
) => React.ReactElement<any>;

const isRenderFn = (value: any): value is RenderFn =>
  typeof value === 'function';

interface LinkProps extends WithStyles<typeof styles> {
  /** The href of the link */
  href?: string;
  /** The target of the link */
  target?: string;
  /** Set to true to display link as full width */
  fullWidth?: boolean;
  /** Called when the link is clicked. */
  onClick?: (e: React.MouseEvent<any>) => any;
  /** The test id of the link */
  testId?: string;
  /** Override the color of the link, currently only used by the website */
  color?: string;
  /** Set true if link is active */
  active?: boolean;
  /** Show underline, currently only used by the website */
  underline?: boolean;
  children?: React.ReactNode | RenderFn;
}

export const Link: React.SFC<LinkProps> = ({
  href = 'javascript:;',
  fullWidth = false,
  active = false,
  color,
  target,
  onClick,
  children,
  classes,
  testId,
  underline,
}) => {
  if (isRenderFn(children)) {
    return children({
      className: cn(
        classes.root,
        fullWidth && classes.fullWidth,
        underline && classes.underline,
      ),
      activeClassName: classes.active,
    });
  }

  return (
    <a
      className={cn(
        classes.root,
        fullWidth && classes.fullWidth,
        active && classes.active,
        underline && classes.underline,
      )}
      href={href}
      target={target}
      onClick={onClick && preventDefault(onClick)}
      style={{ color }}
      {...testAttr(testId)}
    >
      {children}
    </a>
  );
};

export default withStyles(styles)(Link);
