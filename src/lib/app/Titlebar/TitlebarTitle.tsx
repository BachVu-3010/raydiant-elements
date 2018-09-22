import * as React from 'react';
import Heading1 from '../../core/Heading1';
import Text from '../../core/Text';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './TitlebarTitle.styles';

export interface TitlebarTitleProps extends WithStyles<typeof styles> {
  /** The title of the title bar */
  title: string;
  /** Optional subtitle of the title bar */
  subtitle?: string;
}

export const TitlebarTitle: React.SFC<TitlebarTitleProps> = ({
  classes,
  title,
  subtitle,
}) => (
  <span>
    <Heading1>{title}</Heading1>
    {subtitle && (
      <span className={classes.subtitle}>
        <Text muted>{subtitle}</Text>
      </span>
    )}
  </span>
);

export default withStyles(styles)(TitlebarTitle);
