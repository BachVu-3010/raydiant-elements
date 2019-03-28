import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Heading1 from '../../typography/Heading1';
import Text from '../../typography/Text';
import styles from './ActionBarTitle.styles';

export interface ActionBarTitleProps extends WithStyles<typeof styles> {
  /** The title of the title bar */
  title: string;
  /** Optional subtitle of the title bar */
  subtitle?: string;
}

export const ActionBarTitle: React.SFC<ActionBarTitleProps> = ({
  classes,
  title,
  subtitle,
}) => (
  <span>
    <Heading1>
      <span className={classes.title}>{title}</span>
    </Heading1>
    {subtitle && (
      <span className={classes.subtitle}>
        <Text muted>{subtitle}</Text>
      </span>
    )}
  </span>
);

export default withStyles(styles)(ActionBarTitle);
