import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Typography.styles';

export interface TypographyStyleProps {
  center?: boolean;
  ellipsis?: boolean;
  muted?: boolean;
  nowrap?: boolean;
  small?: boolean;
  strikethrough?: boolean;
}

export interface TypographyProps extends TypographyStyleProps {
  className?: string;
  tag?: string;
}

export const Typography: React.FunctionComponent<
  TypographyProps & WithStyles<typeof styles>
> = ({
  center,
  ellipsis,
  muted,
  nowrap,
  small,
  strikethrough,
  children,
  classes,
  className,
  tag: Tag = 'span',
}) => (
  <Tag
    className={cn(
      classes.root,
      center && classes.center,
      ellipsis && classes.ellipsis,
      muted && classes.muted,
      nowrap && classes.nowrap,
      small && classes.small,
      strikethrough && classes.strikethrough,
      className,
    )}
  >
    {children}
  </Tag>
);
export default withStyles(styles)(Typography);
