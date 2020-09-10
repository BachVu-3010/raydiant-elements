import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Typography.styles';

export interface TypographyProps {
  className?: string;
  tag?: string;
  center?: boolean;
  ellipsis?: boolean;
  muted?: boolean;
  nowrap?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
  xxxlarge?: boolean;
  strikethrough?: boolean;
  bold?: boolean;
}

export const Typography: React.FunctionComponent<
  TypographyProps & WithStyles<typeof styles>
> = ({
  center,
  ellipsis,
  muted,
  nowrap,
  xxsmall,
  xsmall,
  small,
  medium,
  large,
  xlarge,
  xxlarge,
  xxxlarge,
  strikethrough,
  children,
  classes,
  className,
  bold,
  tag: Tag = 'span',
}) => (
  <Tag
    className={cn(
      classes.root,
      center && classes.center,
      ellipsis && classes.ellipsis,
      muted && classes.muted,
      nowrap && classes.nowrap,
      xxsmall && classes.xxsmall,
      xsmall && classes.xsmall,
      small && classes.small,
      medium && classes.medium,
      large && classes.large,
      xlarge && classes.xlarge,
      xxlarge && classes.xxlarge,
      xxxlarge && classes.xxxlarge,
      strikethrough && classes.strikethrough,
      bold && classes.bold,
      className,
    )}
  >
    {children}
  </Tag>
);
export default withStyles(styles)(Typography);
