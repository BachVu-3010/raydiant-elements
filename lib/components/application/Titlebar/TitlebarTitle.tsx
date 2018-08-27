import * as React from 'react';
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
    <span className={classes.title}>{title}</span>
    {subtitle && <span className={classes.subtitle}>{subtitle}</span>}
  </span>
);

export default withStyles(styles)(TitlebarTitle);
